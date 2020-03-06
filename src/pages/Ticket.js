import React, { Component } from 'react';
import NavUser from '../components/NavUser';
import { Link } from 'react-router-dom';
import CardTicket from '../components/CardTicket';

class Ticket extends Component{

  render(){
    return(
      <div>
        <div className="navbar">
            <Link to="/">
              <div className="navBarLeft">
                  <span>LandTick</span>
                  <img src={require('../assets/icons/brand-icon.png')} className="brandIconNav"/>
              </div>
              </Link>
              <div className="navBarRight">
                  <NavUser/>
                  {/* {this.props.user.loginStatus ? 'Masok' : <NavLogin handleModalLogin={this.handleModalLogin}/>} */}
              </div> 
        </div>
        <div>
          <h3 class="title">Tiket Saya</h3>
        </div>
        <CardTicket/>
        <CardTicket/>
        <CardTicket/>
        
      </div>
    )
  }
}

export default Ticket
