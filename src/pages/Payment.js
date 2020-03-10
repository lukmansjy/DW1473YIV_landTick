import React, { Component, Fragment } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import { toFullDayName, toIdr } from '../utils';
import { getDetailOrder, postPayOrder } from '../_actions/ordersA';
import { userLoginToken } from '../_actions/usersA';

class Payment extends Component{
    constructor(){
        super()
        this.state = {
            showModal: false,
            toTicket: false,
            img: require('../assets/icons/upload-payment-icon.png'),
            orderId: window.location.pathname.split('/')[2],
            errMsg: ''
        }
    }
    
    handleModal = () =>{
        this.setState({
            showModal: !this.state.showModal
        })
    }

    handleShowOrder = ()=>{
        this.setState({
            toTicket: true,
            showModal: false
        })
    }

    componentDidMount(){
        if(!this.props.user.loginStatus){
            const token = window.localStorage.getItem('token')
            if(token){
                this.props.userLoginToken(token)
            }
        }
        this.props.getDetailOrder(this.state.orderId)
    }

    handleChangeFile = (event)=>{
        this.setState({
            img: URL.createObjectURL(event.target.files[0])
        })
    }

    handleBuy = (event)=>{
        event.preventDefault()
        const file = event.target.elements.picture.files[0]
        if(file){
            this.setState({
                errMsg: ''
            })
            let formData = new FormData() 
            formData.append('payment', file)
            formData.append('orderId', this.state.orderId)
            this.props.postPayOrder(formData).then( () =>{
                this.handleModal()
            })
        }else{
            this.setState({
                errMsg: 'Mohon diisi'
            })
        }
        
    }

    render(){
        const {user, train, qty, totalPrice} = this.props.orderDetail
        return(
            <div>

                {totalPrice ? 

                <Fragment>
                
                    {this.state.toTicket ? <Redirect to="/ticket"/> : null}
                    
                    <Navbar user={this.props.user} />

                    <div>
                        <h3 className="title">Invoice</h3>
                    </div>

                    <div className="invoiceWrapper">

                
                        <div className="invoiceWrapperLeft">
                            <div className="invoiceWarning">
                                <span className="invoiceWarningImg">
                                    <img src={require('../assets/icons/warning-icon.png')} alt="warning" />
                                </span>
                                <span className="invoiceWarningDetail">
                                    <span>Silakan melakukan pembayaran memalui M-Banking, E-Banking dan ATM Ke No Rekening Yang Tertera</span><br/>
                                    <span className="noRek">No.rek : BCA 09812312312</span>
                                </span>
                            </div>



                            <div>
                                <div className="ticketWrapperPayment">
                                    <div className="ticketLogo">
                                        <span>LandTick</span>
                                        <img src={require('../assets/icons/brand-icon.png')} alt="barnd logo"/>
                                    </div>

                                    <div className="deatailTicketPaymentWrapper"><br/>
                                        <span className="deatailTicketPayment colorGray">No. Tanda Pengenal</span>
                                        <span className="deatailTicketPayment colorGray">Nama Pemesan</span>
                                        <span className="deatailTicketPayment colorGray">No. Handphone</span>
                                        <span className="deatailTicketPayment colorGray">Email</span>
                                    </div>

                                    <div className="deatailTicketPaymentWrapper">
                                        <span className="deatailTicketPayment colorGray80">02370328281</span>
                                        <span className="deatailTicketPayment colorGray80">{user.name}</span>
                                        <span className="deatailTicketPayment colorGray80">{user.phone}</span>
                                        <span className="deatailTicketPayment colorGray80">{user.email}</span>
                                    </div>

                                    <div className="deatailTicketPaymentWrapper wrapPayment">
                                        <hr/>
                                        <h4>Rincian Harga</h4>
                                        <span className="deatailTicketPayment colorGray">{train.nameTrain} x {qty}</span>
                                        <span className="deatailTicketPayment colorGray">{toIdr(train.price)}</span>
                                        <span>
                                            <label for="uploadPayment" className="uploadPaymentWrap">
                                                <img src={this.state.img} alt="upload tranfer"/><br/>
                                                <center>
                                                    <label>Klik Untuk Pilih</label><br/>
                                                    <label>Foto Bukti Transfer</label>
                                                </center>
                                                <p className="errorMsg"><center>{this.state.errMsg}</center></p>
                                            </label>
                                            
                                        </span>
                                    </div>
                                    <div className="deatailTicketPaymentWrapper totalPaymentWrapper">
                                        <span className="totalPayment">
                                            <span className="deatailTicketPayment colorGray80">Total</span>
                                            <span className="deatailTicketPayment colorGray">{toIdr(totalPrice)}</span>
                                        </span>
                                        <span className="deatailTicketPayment"></span>
                                        <span className="deatailTicketPayment"></span>
                                    </div>
                                    <div className="deatailTicketPaymentWrapper">
                                        <span className="deatailTicketPayment50">
                                            <form onSubmit={this.handleBuy}>
                                                <input onChange={this.handleChangeFile} name="picture" type="file" style={{display:"none"}} id="uploadPayment" accept="image/png, image/jpeg" />
                                                <button className="btnPayNow" type="submit">Bayar Sekarang</button>
                                            </form>
                                        </span>
                                    </div>
                                </div>
                                
                            </div>



                        </div>
                        <div className="invoiceWrapperRight">
                            <div className="bgDrak">
                                <Row>
                                        <Col xs={8}>
                                            <div className="wrapWidgetRight">
                                                <h4>Kereta Api</h4>
                                                <p>{toFullDayName(train.dateStart)}</p>
                                            </div>
                                        </Col>
                                        <Col xs={4}>
                                            <div className="wrapWidgetRight">
                                                <img src={require('../assets/images/qr-code.png')} width="50px" alt="qrcode"/>
                                                <span>INV101</span>
                                            </div>
                                        </Col>
                                </Row>
                            </div>
                            <div className="wrapperInvoiceWidget">
                                <h6 className="colorGray">{train.nameTrain}</h6>
                                <span className="classTrainName colorGray80">{train.typeTrain.name}</span>
                                <div>
                                    <span className="invoiceWidgetDetailleft">
                                        <span className="circleRoute"></span>
                                    </span>
                                    <span className="invoiceWidgetDetail colorGray">{train.startTime}</span>
                                    <span className="invoiceWidgetDetail colorGray">{train.startStation}</span>
                                </div>
                                <div>
                                    <span className="invoiceWidgetDetailleft">
                                        {/* <span className="markerRoute"></span> */}
                                    </span>
                                    <span className="invoiceWidgetDetail colorGray80">{toFullDayName(train.dateStart)}</span>
                                    <span className="invoiceWidgetDetail colorGray80"></span>
                                </div>
                                <br/>
                                <div>
                                    <span className="invoiceWidgetDetailleft">
                                    <span className="circleRoute circleRouteDark"></span>
                                    </span>
                                    <span className="invoiceWidgetDetail colorGray">{train.arrivalTime}</span>
                                    <span className="invoiceWidgetDetail colorGray">{train.destinationStation}</span>
                                </div>
                                <div>
                                    <span className="invoiceWidgetDetailleft"></span>
                                    <span className="invoiceWidgetDetail colorGray80">{toFullDayName(train.dateStart)}</span>
                                    <span className="invoiceWidgetDetail colorGray80"></span>
                                </div>
                            </div>
                                
                        </div>


                    </div>

                    <Modal show={this.state.showModal} onHide={this.handleModal} className="modalContent">
                        <div className="modalInfoPayment">
                            <p>Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam Untuk melihat pesanan <b onClick={this.handleShowOrder}>Klik Disini</b> Terimakasih</p>
                        </div>
                    </Modal>
                </Fragment>

                :null}

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        user: state.users,
        orderDetail: state.orders.orderDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailOrder: (id)=> dispatch( getDetailOrder(id) ),
        postPayOrder: (data)=> dispatch( postPayOrder(data) ),
        userLoginToken: (token)=> dispatch( userLoginToken(token) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)