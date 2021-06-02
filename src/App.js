import './App.css';
import Nav from './Nav';
import Orders from './components/Orders';
import ProductConfig from './components/ProductConfig'
import ProductList from './components/ProductList'
import Pincode from './components/Pincode'
import Coupon from './components/Coupon'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
          <Switch>
            <Route path="/" exact component={ProductConfig}/>
            <Route path="/order" component={Orders}/>
            <Route path="/list" component={ProductList}/>
            <Route path="/pincode" component={Pincode}/>
            <Route path="/coupon" component={Coupon}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
