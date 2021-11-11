import './App.css';
import Nav from './Nav';
import Orders from './components/Orders';
import ProductConfig from './components/ProductConfig'
import ProductList from './components/ProductList'
import Pincode from './components/Pincode'
import Coupon from './components/Coupon'
import AppHome from './components/AppHome'
import SpinWheel from './components/SpinWheel'
import { useSelector } from "react-redux";

//preorder
import PreorderProductList from './components/PreorderProducList';
import PreorderConfig from './components/PreorderConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LogIn from './components/Login';
import PrivateRoute from './util/PrivateRoute';

function App() {
  const auth = useSelector((state) => state.auth);

  return (
    <Router>
      {auth.token !== null ? <Nav /> : null}
      <div className="App">
        <Switch>
          {/* <Route path="/" exact component={ProductConfig}/> */}
          <PrivateRoute path="/" exact component={PreorderConfig} />
          <Route path="/login" component={LogIn} />
          {/* <Route path="/order" component={Orders}/> */}
          {/* <Route path="/list" component={ProductList}/> */}
          <PrivateRoute path="/list" component={PreorderProductList} />
          <PrivateRoute path="/pincode" component={Pincode} />
          <PrivateRoute path="/coupon" component={Coupon} />
          <PrivateRoute path="/app-section" component={AppHome} />
          <PrivateRoute path="/spin-wheel" component={SpinWheel} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
