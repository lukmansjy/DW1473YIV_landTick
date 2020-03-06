import React, { Fragment, useState, Component } from 'react'
import { DropdownButton, Dropdown, SplitButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardTransaction from '../components/CardTransaction'
import NavUser from '../components/NavUser'
import NavAdmin from '../components/NavAdmin'

class AddTicket extends Component{
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
                    <h3 class="title">Tambah Ticket</h3>
                </div>

                <div className="wrapFormAddTicket">
                    <div className="formAddTicket">
                        <form>
                            <label>Nama Kereta</label><br/>
                            <input type="text" className="myInputTextEdit"/><br/>
                            <label>Jenis Kereta</label><br/>
                            <select className="myInputTextEdit">
                                <option value="books">Approve</option>
                                <option value="html">Pending</option>
                                <option value="css">Cancel</option>
                            </select>
                            <label for="date">Tanggal Keberangakatan</label><br/>
                            <input type="date" id="date" className="myInputTextEdit"/><br/>
                            <label>Stasiun Keberangakatan</label><br/>
                            <input type="text" className="myInputTextEdit"/><br/>
                            <label>Jam Keberangakatan</label><br/>
                            <input type="time" className="myInputTextEdit"/><br/>
                            <label>Stasiun Tujuan</label><br/>
                            <input type="text" className="myInputTextEdit"/><br/>
                            <label>Jam Tiba</label><br/>
                            <input type="time" className="myInputTextEdit"/><br/>
                            <label>Harga Tiket</label><br/>
                            <input type="text" className="myInputTextEdit"/><br/>
                            <label>Qty</label><br/>
                            <input type="number" className="myInputTextEdit"/><br/>
                            <center>
                                <button className="btnSave">Save</button>
                            </center>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default AddTicket