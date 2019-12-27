import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bouquets from '../src/Components/Bouquets'
import BouquetView from '../src/Components/BouquetView'
import Users from '../src/Components/Users'
import Orders from './Components/Orders'
import Cart from './Components/Cart'
import Purchase from './Components/Purchase'
import SignUp from '../src/Components/SignUp'
import LogIn from '../src/Components/LogIn'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route exact path="/bouquets" component={Bouquets} />
      <Route path="/bouquets/:id" component={BouquetView} />
      <Route path="/users" component={Users} />
      <Route path="/orders" component={Orders} />
      <Route path="/cart" component={Cart} />
      <Route path="/purchase" component={Purchase} />
    </div>
  </Router>
  )}

export default App;
