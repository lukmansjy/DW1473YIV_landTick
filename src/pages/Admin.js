import React, { Fragment, useState, Component } from 'react'
import { DropdownButton, Dropdown, SplitButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardTransaction from '../components/CardTransaction'
import NavUser from '../components/NavUser'
import NavAdmin from '../components/NavAdmin'

class Admin extends Component{
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
                        <NavAdmin/>
                        {/* {this.props.user.loginStatus ? 'Masok' : <NavLogin handleModalLogin={this.handleModalLogin}/>} */}
                    </div>
                </div>
    
                <div>
                    <h3 class="title">List Transaksi</h3>
                </div>
                <div className="tableTransaction">
                    <div className="tableHeader">
                        <span className="tableRowTransactionNo">No</span>
                        <span className="tableRowTransaction">User</span>
                        <span className="tableRowTransaction">Tiket</span>
                        <span className="tableRowTransaction">Bukti Transfer</span>
                        <span className="tableRowTransaction">Status Payment</span>
                        <span className="tableRowTransaction">Action</span>
                    </div>
                    
                    <CardTransaction index={0}/>
                    <CardTransaction index={1}/>
                    <CardTransaction index={2}/>
                    <CardTransaction index={3}/>
                    <CardTransaction index={4}/>
                    <CardTransaction index={5}/>
                </div>
            </div>
        )
    }

}

export default Admin