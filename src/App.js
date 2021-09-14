import './App.css';
import Nav from './Nav';
import Orders from './components/Orders';
import ProductConfig from './components/ProductConfig'
import ProductList from './components/ProductList'
import Pincode from './components/Pincode'
import Coupon from './components/Coupon'
import AppHome from './components/AppHome'

//preorder
import PreorderProductList from './components/PreorderProducList';
import PreorderConfig from './components/PreorderConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
       <Nav/>
      <div className="App">
       
          <Switch>
            {/* <Route path="/" exact component={ProductConfig}/> */}
            <Route path="/" exact component={PreorderConfig}/>
            {/* <Route path="/order" component={Orders}/> */}
            {/* <Route path="/list" component={ProductList}/> */}
            <Route path="/list" component={PreorderProductList}/>
            <Route path="/pincode" component={Pincode}/>
            <Route path="/coupon" component={Coupon}/>
            <Route path="/app-section" component={AppHome}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
