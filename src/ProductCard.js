import './index.css';
import React from 'react';
import Card from 'react-bootstrap/Card';


export function ProductCard(props) {
    return(
        <div>
            <Card style={{ width: '100%'}}>
                <Card.Header as="h4">{props.itemName}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.restaurant}</Card.Title>
                    <Card.Subtitle className="mb-2">{`$${props.price}`}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{`${props.totalQuantity} purchased recently`}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                        {`Ordered ${Math.floor(props.mostRecent/60)} hours ${props.mostRecent%60} mins ago`}
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
        
    );
}

export default ProductCard; 
