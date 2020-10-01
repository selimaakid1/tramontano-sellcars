import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Buy from './Components/Buy';
import AddCar from './Components/AddCar';
import Dashboard from './Components/Dashboard'
import Rent from './Components/Rent'
import Contatti from './Components/Contatti'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/vendita' component={Buy}/>
          <Route exact path='/nolleggio' component={Rent}/>
          <Route exact path='/contatti' component={Contatti}/>
          <Route exact path='/aggiungi' component={AddCar}/>
          <Route exact path='/areariservata' component={Dashboard}/>
        </Switch>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
