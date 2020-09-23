import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Buy from './Components/Buy';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/vendita' component={Buy}/>

        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
