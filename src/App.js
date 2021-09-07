import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Termsandconditions from './components/pages/Terms and conditions/Termsandconditions';
import Noproduct from './components/pages/without product listing/noproductlisting';
import products from './components/pages/Productlisting/product';
import Science from './components/pages/Science of sleep/science';



function App() {
  return (
        	<BrowserRouter>
				<Switch>
			    	<Route path="/noproducts" component={Noproduct} />
					<Route path="/terms" component={Termsandconditions} />
					<Route path="/products" component={products} />
					<Route path="/science" component={Science} />
				</Switch>
			</BrowserRouter>
  );
}

export default App;
 