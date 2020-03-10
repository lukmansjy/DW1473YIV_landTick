import React, { Component, Fragment } from "react";
import { Col, Row } from 'react-bootstrap';
import { connect } from "react-redux";
import { getTicketsSearch } from '../_actions/ticketsA';
import Loading from './Loading';


class SearchTicket extends Component{
    constructor(){
        super()
        this.state = {
            startStation: '',
            date: '',
            dateTo: '',
            destinationStation: '',
            qtyAdult: 0,
            qtyBaby: 0,
            formErr: false
        }
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })

        
    }

    sendQtyToHome = ()=>{
        let qty = this.state.qtyAdult + this.state.qtyBaby
        this.props.handleTotalQty(qty)
    }

    handleChangeQtyAdultMin = ()=>{
        if(this.state.qtyAdult > 0){
            this.setState({
                qtyAdult: this.state.qtyAdult - 1
            }, ()=> this.sendQtyToHome() )
        }
    }

    handleChangeQtyAdultAdd = ()=>{
        this.setState({
            qtyAdult: this.state.qtyAdult + 1
        }, ()=> this.sendQtyToHome() )
    }
    
    handleChangeQtyBabyMin = ()=>{
        if(this.state.qtyBaby > 0){
            this.setState({
                qtyBaby: this.state.qtyBaby - 1
            }, ()=> this.sendQtyToHome() )
        }
    }

    handleChangeQtyBabyAdd = ()=>{
        this.setState({
            qtyBaby: this.state.qtyBaby + 1
        }, ()=> this.sendQtyToHome() )
    }

    invreseStation = () => {
        let stationStart = this.state.startStation
        let stationDestination = this.state.destinationStation
        this.setState({
            startStation: stationDestination,
            destinationStation: stationStart
        })
    }

    handleSearchTicket = ()=>{
        let formErr = false
        if(this.state.startStation.length <= 0){
            // formErr = true
        }
        if(this.state.destinationStation.length <= 0){
            // formErr = true
        }
        
        if(formErr){
            this.setState({
                formErr: true
            })
        }else{
            this.setState({
                formErr: false
            })

            let dataSearch = {
                date_time_gte: this.state.date,
                date_time_lte: this.state.dateTo,
                start_station: this.state.startStation,
                destination_station: this.state.destinationStation
            }

            this.props.getTicketsSearch(dataSearch)
        }
    }

    componentDidMount(){
        const date = new Date()
        const dateNow = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`
        this.setState({
            date: dateNow,
            dateTo: dateNow
        })
    }

    render(){
        return(
            <Fragment>
                <div className="seachTicket">
                    <Row>

                        <Col xs={3}>
                            <div className="ticketTitleContainer">
                                <p className="ticketActive">Tiket Kereta Api</p>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className="ticketActiveBody">
                                <label className="myLabelColor">Asal</label><br/>
                                <input onChange={this.handleChange} name="startStation" value={this.state.startStation} type="text" className="myInputText pl-1" placeholder="Asal Stasiun"/><br/>
                                <label className="myLabelColor">Tanggal Berangkat</label><br/>
                                <input onChange={this.handleChange} name="date" type="date" value={this.state.date} className="pl-1" style={{width: '41%'}}/>
                                <label className="myLabelColor pr-1"><b>-</b></label>
                                <input onChange={this.handleChange} name="dateTo" type="date" value={this.state.dateTo} className="pl-1" style={{width: '41%'}}/>
                                <br/>
                                <input type="checkbox"/><label className="myLabelColor">Pulang pergi</label>
                            </div>
                            <div className="btnSwithDestination">
                                <button onClick={this.invreseStation}><img src={require('../assets/icons/arrow-compare-icon.png')} alt="arrow compare"/></button>
                            </div>
                        </Col>

                        <Col xs={4}>
                            <div className="ticketActiveBody">
                                
                                <div>
                                    <label className="myLabelColor">Tujuan</label><br/>
                                    <input onChange={this.handleChange} name="destinationStation" value={this.state.destinationStation} type="text" className="myInputText pl-1" placeholder="Tujuan Stasiun"/><br/>
                                </div>
                                <Row>
                                    <Col xs={4}>
                                        <label className="myLabelColor">Dewasa</label><br/>
                                        <div>
                                            <div className="wrapQty">
                                            <button onClick={this.handleChangeQtyAdultMin} className="btnCartMin">
                                                    <img src={require('../assets/icons/remove-white-icon.png')} alt="remove"/>
                                                </button>
                                                <p className="totalOrder">{this.state.qtyAdult}</p>
                                                <button onClick={this.handleChangeQtyAdultAdd} className="btnCartAdd">
                                                    <img src={require('../assets/icons/add-white-icon.png')} alt="add"/>
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={4}>
                                    <label className="myLabelColor">Bayi</label><br/>
                                        <div>
                                            <div className="wrapQty">
                                                <button onClick={this.handleChangeQtyBabyMin} className="btnCartMin">
                                                    <img src={require('../assets/icons/remove-white-icon.png')} alt="remove"/>
                                                </button>
                                                <p className="totalOrder">{this.state.qtyBaby}</p>
                                                    <button onClick={this.handleChangeQtyBabyAdd} className="btnCartAdd">
                                                        <img src={require('../assets/icons/add-white-icon.png')} alt="add"/>
                                                    </button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={4}>
                                        {this.props.isLoading ? 
                                            <span className="btnSearchLoading">
                                                <Loading/>
                                            </span>
                                        :
                                        
                                            <button onClick={this.handleSearchTicket} className="btnSearch">Cari Tiket</button>
                                        
                                        }
                                    </Col>
                                    {this.state.formErr ? <span className="errFromMsg">Pastikan asal dan tujuan stasiun diisi</span> : null}
                                </Row>
                                
                            </div>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        isLoading: state.tickets.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTicketsSearch: (data)=> dispatch( getTicketsSearch(data) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTicket)