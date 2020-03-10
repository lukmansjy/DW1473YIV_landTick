import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CardTicket from '../components/CardTicket';
import Navbar from '../components/Navbar';
import { getAllOrders } from '../_actions/ordersA';
import { userLoginToken } from '../_actions/usersA';


class Ticket extends Component{

  componentDidMount(){
    if(!this.props.user.loginStatus){
        const token = window.localStorage.getItem('token')
        if(token){
            this.props.userLoginToken(token)
        }
    }
      this.props.getAllOrders()
  }

  render(){
    return(
      <div>
        <Navbar user={this.props.user}/>
        <div>
          <h3 className="title">List Transaksi Tiket</h3>
        </div>
        {this.props.dataTicketsUser.reverse().map((ticket, index)=>(
          <CardTicket key={index} ticket={ticket}/>
        ))}
        {this.props.dataTicketsUser.length === 0 ? 
          <h6 className="pt-4">
            <center>Kamu belum pernah order tiket, silakan order tiket di <Link to="/">Home page</Link>.</center>
          </h6> : null}
        
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
      user: state.users,
      dataTicketsUser: state.orders.dataTicketsUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      userLoginToken: (token)=> dispatch( userLoginToken(token) ),
      getAllOrders: ()=> dispatch( getAllOrders() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)
