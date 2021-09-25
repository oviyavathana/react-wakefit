import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Termsandconditions from './components/pages/Terms and conditions/Termsandconditions';
import Noproduct from './components/pages/without product listing/noproductlisting';
import products from './components/pages/Productlisting/product';
import Science from './components/pages/Science of sleep/science';
import Carousel from './components/pages/HomePage/Carousel/carousel.js';
import Furniture from './components/pages/HomePage/Furniture/furniture.js';
import Sleep from './components/pages/HomePage/Sleep/sleep.js';
import Navbar from './components/pages/HomePage/Navbar/navbar';
import Offers from './components/pages/HomePage/Offers/offers.js'

function App() {
  return (
        	<BrowserRouter>
				<Switch>
			    	<Route path="/noproducts" component={Noproduct} />
					<Route path="/terms" component={Termsandconditions} />
					<Route path="/products" component={products} />
					<Route path="/science" component={Science} />
					<Route path="/carousel" component={Carousel} />
					<Route path="/furniture" component={Furniture} />
					<Route path="/sleep" component={Sleep} />
					<Route path="/navbar" component={Navbar} />
					<Route path="/offers" component={Offers} />
				</Switch>
			</BrowserRouter>
  );
}

export default App;
 