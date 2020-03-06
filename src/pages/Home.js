import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux';

import {userLogin} from '../_actions/usersA'
import NavLogin from '../components/NavLogin';
import ModalLogin from '../components/ModalLogin';
import CardProduct from '../components/CardProduct';
import NavUser from '../components/NavUser';
import { Link } from 'react-router-dom';

class Home extends Component{
    constructor(){
        super()
        this.state = {
            modalLogin: false
        }
    }

    handleModalLogin = ()=>{
        this.setState({
            modalLogin: !this.state.modalLogin
        })
    }

    handleLogin = (event)=> {
        event.preventDefault()
        let dataLogin = {
            username: event.target.elements.username.value,
            password: event.target.elements.password.value

        }
        console.log(dataLogin)
        this.props.userLogin(dataLogin)
    }
    
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

                {/* mxsm */}

                <Container fluid={true} className="myJumboTron">
                    <Row>
                        <Col xs={6} className="myJumboTronLeft">
                            <h3 className="ml-5">Selamat Pagi, Ticket Seekers !</h3>
                            <p className="ml-5">Ingin pulkam dengan Good Deal ?</p>
                            <p className="ml-5">Masuk atau Daftar Sekarang !!</p>
                        </Col>
                        <Col xs={6} className="myJumboTronRight">
                            <div className="imgPromo1">
                                <img src={require('../assets/images/promo-1.jpg')} />
                            </div>
                            <div className="imgPromo2">
                                <img src={require('../assets/images/promo-2.jpg')} />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="wrapSearchTicket">
                    <Container fluid={true}>
                        <Row>
                            <Col xs={2}>
                            </Col>
                            <Col xs={8}>

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
                                                <input type="text" className="myInputText"/><br/>
                                                <label className="myLabelColor">Tanggal Berangkat</label><br/>
                                                <input type="date"/><br/>
                                                <input type="checkbox"/><label className="myLabelColor">Pulang pergi</label>
                                            </div>
                                            <div className="btnSwithDestination">
                                                <button><img src={require('../assets/icons/arrow-compare-icon.png')}/></button>
                                            </div>
                                        </Col>

                                        <Col xs={4}>
                                            <div className="ticketActiveBody">
                                                
                                                <div>
                                                    <label className="myLabelColor">Tujuan</label><br/>
                                                    <input type="text" className="myInputText"/><br/>
                                                </div>
                                                <Row>
                                                    <Col xs={4}>
                                                        <label className="myLabelColor">Dewasa</label><br/>
                                                        <div>
                                                            <div className="wrapQty">
                                                            <button className="btnCartMin">
                                                                    <img src={require('../assets/icons/remove-white-icon.png')} alt="remove"/>
                                                                </button>
                                                                <p className="totalOrder">0</p>
                                                                <button className="btnCartAdd">
                                                                    <img src={require('../assets/icons/add-white-icon.png')} alt="add"/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={4}>
                                                    <label className="myLabelColor">Dewasa</label><br/>
                                                        <div>
                                                            <div className="wrapQty">
                                                            <button className="btnCartMin">
                                                                    <img src={require('../assets/icons/remove-white-icon.png')} alt="remove"/>
                                                                </button>
                                                                <p className="totalOrder">0</p>
                                                                <button className="btnCartAdd">
                                                                    <img src={require('../assets/icons/add-white-icon.png')} alt="add"/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <button className="btnSearch">Cari Tiket</button>
                                                    </Col>
                                                </Row>
                                                
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                            </Col>
                            <Col xs={2}>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div className="wraperList">
                    <div className="containerList">
                        <span className="listTitle">Nama Kereta</span>
                        <span className="listTitle">Berangkat</span>
                        <span className="listTitle">Tiba</span>
                        <span className="listTitle">Durasi</span>
                        <span className="listTitle">Harga Per Orang</span>
                    </div>

                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>

                </div>

                <ModalLogin 
                    show={this.state.modalLogin}
                    handleModalLogin={this.handleModalLogin}
                    handleLogin={this.handleLogin} 
                    isLoading={this.props.user.isLoading}
                    dataError={this.props.user.dataError.data}
                />

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log('REDUX DATA HOME.JS', state);
    
    return{
        user: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (data)=> dispatch( userLogin(data) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
