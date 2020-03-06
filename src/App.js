import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Ticket from './pages/Ticket';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Payment from './pages/Payment';
import Admin from './pages/Admin';
import AddTicket from './pages/AddTicket';

class App extends Component{

  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/ticket">
              <Ticket/>
            </Route>
            <Route path="/payment">
              <Payment/>
            </Route>
            <Route path="/admin/add-ticket">
              <AddTicket/>
            </Route>
            <Route path="/admin">
              <Admin/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
          
        </BrowserRouter>
      </div>
    )
  }
}

export default App
