import './index.css';
import React, { Component } from 'react';
import ProductCard from './ProductCard';

const ITEMS_PER_PAGE = 10; 

class ProductCardListing extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            allCards: props.allCards, 
            cards: props.allCards.slice(0, ITEMS_PER_PAGE), 
            pageNumber: 1
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.infiniteScroll);
    }
    
    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }

    fetch(pageNumber) {
        this.setState({
            cards: [...this.state.cards, ...this.state.allCards.slice(pageNumber * ITEMS_PER_PAGE, (pageNumber + 1) * ITEMS_PER_PAGE)],
        })
    }

    // Inspiration taken from: https://kennethscoggins.medium.com/using-the-infinite-scrolling-method-to-fetch-api-data-in-reactjs-c008b2b3a8b9
    infiniteScroll = () => {
        const bottomReached = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 5); 
        if (bottomReached) {
            let nextPageNumber = this.state.pageNumber + 1;  
            this.setState({
                 pageNumber: nextPageNumber
            });
           this.fetch(nextPageNumber);
        }
    }

    render() {
        return(
            <div styles={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                {this.state.cards.map((productCard) => (
                    <ul key={productCard["Item Name"]}>
                        <ProductCard 
                            itemName={productCard["Item Name"]} 
                            restaurant={productCard["Restaurant"]} 
                            price={productCard["Product Price"]}
                            totalQuantity={productCard["Quantity"]}
                            mostRecent={productCard["Minutes Ago"]}></ProductCard>
                    </ul>
                ))}
            </div>
        );
    }
}

export default ProductCardListing; 
