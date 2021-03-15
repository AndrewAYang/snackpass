import ProductCardListing from './ProductCardListing';
import {AllOrders} from './OrdersUtil';
import {ConvertCSVtoJSON} from './CSVConverterUtil'; 
import {SortProductByItemName} from './ProductCardSorterUtil';
import {Navbar} from 'react-bootstrap';

function App() {  
  const allOrdersJSON = ConvertCSVtoJSON(AllOrders);
  const sortedOrders = SortProductByItemName(allOrdersJSON);
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand className="navbar-title">Trending Items</Navbar.Brand>
      </Navbar>
      <ProductCardListing allCards={sortedOrders}></ProductCardListing>
    </div>
  );
}

export default App;
