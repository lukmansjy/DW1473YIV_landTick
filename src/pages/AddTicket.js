import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'

import {addTicket} from '../_actions/ticketsA'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {userLoginToken} from '../_actions/usersA'

class AddTicket extends Component{
    constructor(){
        super()
        this.state = {
            typeTrains: ['Sleeper', 'Priority', 'Executive', 'Business', 'Economiy'],
            formErr: false,
            showModal: false
        }
    }

    componentDidMount(){
        if(!this.props.user.loginStatus){
            const token = window.localStorage.getItem('token')
            if(token){
                this.props.userLoginToken(token)
            }
        }
    }
    
    handleModal = ()=>{
        this.setState({
            showModal: !this.state.showModal
        })
    }
    
    handleSubmit = (event) =>{
        event.preventDefault()
        let nameTrain = event.target.elements.nameTrain.value
        let typeTrainId = event.target.elements.typeTrainId.value
        let dateStart = event.target.elements.dateStart.value
        let startStation = event.target.elements.startStation.value
        let startTime = event.target.elements.startTime.value
        let destinationStation = event.target.elements.destinationStation.value
        let arrivalTime = event.target.elements.arrivalTime.value
        let price = event.target.elements.price.value
        let qty = event.target.elements.qty.value

        let formErr = false
        if(nameTrain.length === 0){
            formErr = true
        }
        if(typeTrainId.length === 0){
            formErr = true
        }
        if(dateStart.length === 0){
            formErr = true
        }
        if(startStation.length === 0){
            formErr = true
        }
        if(startTime.length === 0){
            formErr = true
        }
        if(destinationStation.length === 0){
            formErr = true
        }
        if(arrivalTime.length === 0){
            formErr = true
        }
        if(price.length === 0){
            formErr = true
        }
        if(qty.length === 0){
            formErr = true
        }

        if(formErr){
            this.setState({
                formErr: true
            })
        }else{
            const data = {
                nameTrain: nameTrain,
                typeTrain:{
                    id: typeTrainId
                },
                dateStart: dateStart,
                startStation: startStation,
                timeStart: startTime,
                destinationStation : destinationStation,
                arrivalTime: arrivalTime,
                price: price,
                qty: qty
            }
            this.props.addTicket(data).then(()=>{
                this.handleModal()
            })
        }
    }

    render(){
        return(
            <div>

                <Navbar
                    user={this.props.user}
                />
    
                <div>
                    <h3 className="title">Tambah Ticket</h3>
                </div>

                <div className="wrapFormAddTicket">
                    <div className="formAddTicket">
                        <form onSubmit={this.handleSubmit}>
                            <label>Nama Kereta</label><br/>
                            <input name="nameTrain" type="text" className="myInputTextEdit"/><br/>
                            <label>Jenis Kereta</label><br/>
                            <select name="typeTrainId" className="myInputTextEdit">
                                {this.state.typeTrains.map((typeTrain, index) => (
                                    <option key={index} value={index+1}>{typeTrain}</option>
                                ))}
                            </select>
                            <label>Tanggal Keberangakatan</label><br/>
                            <input name="dateStart" type="date" className="myInputTextEdit"/><br/>
                            <label>Stasiun Keberangakatan</label><br/>
                            <input name="startStation" type="text" className="myInputTextEdit"/><br/>
                            <label>Jam Keberangakatan</label><br/>
                            <input name="startTime" type="time" className="myInputTextEdit"/><br/>
                            <label>Stasiun Tujuan</label><br/>
                            <input name="destinationStation" type="text" className="myInputTextEdit"/><br/>
                            <label>Jam Tiba</label><br/>
                            <input name="arrivalTime" type="time" className="myInputTextEdit"/><br/>
                            <label>Harga Tiket</label><br/>
                            <input name="price" type="text" className="myInputTextEdit"/><br/>
                            <label>Qty</label><br/>
                            <input name="qty" type="number" className="myInputTextEdit"/><br/>
                            <center>
                                <button type="submit" className="btnSave">Save</button>
                            </center>
                        </form>
                    </div>
                </div>

                <Modal show={this.state.showModal} onHide={this.handleModal} className="modalContent">
                    <div className="pt-2">
                        <p>Tiket berhasil ditambahkan, untuk melihatnya silakan cek di <b><Link to="/">Home</Link></b> page.</p>
                    </div>
                </Modal>
                
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return{
        user: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTicket: (data)=> dispatch( addTicket(data) ),
        userLoginToken: (token)=> dispatch(userLoginToken(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTicket)