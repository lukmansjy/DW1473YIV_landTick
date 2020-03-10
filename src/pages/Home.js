import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CardProduct from '../components/CardProduct';
import ModalLogin from '../components/ModalLogin';
import ModalRegister from '../components/ModalRegister';
import Navbar from '../components/Navbar';
import SearchTicket from '../components/SearchTicket';
import { getAllOrders, orderTicket } from '../_actions/ordersA';
import { getTicketsToday } from '../_actions/ticketsA';
import { userLogin, userLoginToken, userRegister } from '../_actions/usersA';


class Home extends Component{
    constructor(){
        super()
        this.state = {
            modalLogin: false,
            modalRegister: false,
            totalQty: 0,
            toMyTicket: false,
            errRegister: false
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
        this.props.userLogin(dataLogin)
    }

    handleModalRegister = ()=>{
        this.setState({
            modalRegister: !this.state.modalRegister
        })
    }

    handleRegister = (event) => {
        event.preventDefault()
        let dataRegister = {
            name: event.target.elements.name.value,
            username: event.target.elements.username.value,
            email: event.target.elements.email.value,
            password: event.target.elements.password.value,
            gender: event.target.elements.gender.value,
            phone: event.target.elements.phone.value,
            address: event.target.elements.address.value,
        }

        let err = false
        if(dataRegister.name.length <= 0){
            err = true
        }
        if(dataRegister.username.length <= 0){
            err = true
        }
        if(dataRegister.email.length <= 0){
            err = true
        }
        if(dataRegister.password.length <= 0){
            err = true
        }
        if(dataRegister.gender.length <= 0){
            err = true
        }
        if(dataRegister.phone.length <= 0){
            err = true
        }
        if(dataRegister.address.length <= 0){
            err = true
        }

        if(err){
            this.setState({
                errRegister: true
            })
        }else{
            this.props.userRegister(dataRegister)
        }
    }

    handleTotalQty = (total)=>{
        this.setState({
            totalQty: total
        })
    }

    handleOrderTicket = (data) =>{
        this.props.orderTicket(data).then( (data)=> {
            this.setState({
                toMyTicket: true
            })
        })
    }

    componentDidMount(){
        if(!this.props.user.loginStatus){
            const token = window.localStorage.getItem('token')
            if(token){
                this.props.userLoginToken(token)
                this.props.getAllOrders()
            }
        }


        const date = new Date()
        const dateNow = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`
        this.props.getTicketsToday(dateNow)
    }
    
    render(){
        if( (this.state.modalLogin || this.state.modalRegister) && this.props.user.loginStatus ){
            this.setState({
                modalLogin: false,
                modalRegister: false
            })
        }

        return(
            <div>
                
                {this.state.toMyTicket ? <Redirect to="ticket"/> : null}
                
                <Navbar 
                    handleModalLogin={this.handleModalLogin}
                    handleModalRegister={this.handleModalRegister}
                    user={this.props.user}
                />

                <Container fluid={true} className="myJumboTron">
                    <Row>
                        <Col xs={6} className="myJumboTronLeft">
                            <h3 className="ml-5">Selamat Pagi, Ticket Seekers !</h3>
                            <p className="ml-5">Ingin pulkam dengan Good Deal ?</p>
                            <p className="ml-5">Masuk atau Daftar Sekarang !!</p>
                        </Col>
                        <Col xs={6} className="myJumboTronRight">
                            <div className="imgPromo1">
                                <img src={require('../assets/images/promo-1.jpg')} alt="promo" />
                            </div>
                            <div className="imgPromo2">
                                <img src={require('../assets/images/promo-2.jpg')} alt="promo" />
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
                                <SearchTicket handleTotalQty={this.handleTotalQty}/>
                            </Col>
                            <Col xs={2}>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="wraperList mb-4">

                {this.props.tickets.length > 0 ? 
                
                    <Fragment>
                        {this.props.tickets.map( (ticket, index) => (
                            <CardProduct key={index}
                                ticket={ticket} 
                                index={index} user={this.props.user} 
                                qty={this.state.totalQty} 
                                handleOrderTicket={this.handleOrderTicket}/>
                        ))}
                    </Fragment>
                :
                    <h5><center>Tiket tidak tersedia</center></h5>
                }

                </div>

                <ModalLogin 
                    show={this.state.modalLogin}
                    handleModalLogin={this.handleModalLogin}
                    handleLogin={this.handleLogin} 
                    isLoading={this.props.user.isLoading}
                    dataError={this.props.user.dataError.data}
                />

                <ModalRegister
                    show={this.state.modalRegister}
                    handleModalRegister={this.handleModalRegister}
                    handleRegister={this.handleRegister}
                    errRegister={this.state.errRegister}
                />

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        user: state.users,
        tickets: state.tickets.data,
        orders: state.orders
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (data)=> dispatch( userLogin(data) ),
        userLoginToken: (token)=> dispatch( userLoginToken(token) ),
        getTicketsToday: (dateNow)=> dispatch( getTicketsToday(dateNow) ),
        orderTicket: (data) => dispatch( orderTicket(data) ),
        getAllOrders: ()=> dispatch( getAllOrders() ),
        userRegister: (data)=> dispatch( userRegister(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
