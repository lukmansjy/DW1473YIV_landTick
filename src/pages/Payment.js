import React,{ Component } from "react";
import NavUser from "../components/NavUser";
import { Link, Redirect } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class Payment extends Component{
    constructor(){
        super()
        this.state = {
            showModal: false,
            toTicket: false
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

    render(){
        return(
            <div>
                {this.state.toTicket ? <Redirect to="/tickets"/> : null}
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
                    <h3 class="title">Invoice</h3>
                </div>

                <div className="invoiceWrapper">

            
                    <div className="invoiceWrapperLeft">
                        <div className="invoiceWarning">
                            <span className="invoiceWarningImg">
                                <img src={require('../assets/icons/warning-icon.png')} />
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
                                    <img src={require('../assets/icons/brand-icon.png')} />
                                </div>

                                <div className="deatailTicketPaymentWrapper"><br/>
                                    <span className="deatailTicketPayment colorGray">No. Tanda Pengenal</span>
                                    <span className="deatailTicketPayment colorGray">Nama Pemesan</span>
                                    <span className="deatailTicketPayment colorGray">No. Handphone</span>
                                    <span className="deatailTicketPayment colorGray">Email</span>
                                </div>

                                <div className="deatailTicketPaymentWrapper">
                                    <span className="deatailTicketPayment colorGray80">02370328281</span>
                                    <span className="deatailTicketPayment colorGray80">Lukman Sanjaya</span>
                                    <span className="deatailTicketPayment colorGray80">082226455525</span>
                                    <span className="deatailTicketPayment colorGray80">lukman.rocks@live.com</span>
                                </div>

                                <div className="deatailTicketPaymentWrapper wrapPayment">
                                    <hr/>
                                    <h4>Rincian Harga</h4>
                                    <span className="deatailTicketPayment colorGray">Argo Sanjaya - x 2</span>
                                    <span className="deatailTicketPayment colorGray">Rp. 300.000</span>
                                    <span>
                                        <label for="uploadPayment" className="uploadPaymentWrap">
                                            <img src={require('../assets/icons/upload-payment-icon.png')} className="opacity35"/><br/>
                                            <label>Upload Bukti Transfer</label>
                                        </label>
                                        <input type="file" style={{display:"none"}} id="uploadPayment"/>
                                    </span>
                                </div>
                                <div className="deatailTicketPaymentWrapper totalPaymentWrapper">
                                    <span className="totalPayment">
                                        <span className="deatailTicketPayment colorGray80">Total</span>
                                        <span className="deatailTicketPayment colorGray">Rp. 600.000</span>
                                    </span>
                                    <span className="deatailTicketPayment"></span>
                                    <span className="deatailTicketPayment"></span>
                                </div>
                                <div className="deatailTicketPaymentWrapper">
                                    <span className="deatailTicketPayment50">
                                        <button className="btnPayNow" onClick={this.handleModal}>Bayar Sekarang</button>
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
                                            <p>Saturday, 21 Febuary 2020</p>
                                        </div>
                                    </Col>
                                    <Col xs={4}>
                                        <div className="wrapWidgetRight">
                                            <img src={require('../assets/images/qr-code.png')} width="50px"/>
                                            <span>INV101</span>
                                        </div>
                                    </Col>
                            </Row>
                        </div>
                        <div className="wrapperInvoiceWidget">
                            <h6 className="colorGray">Argo Wilis</h6>
                            <span className="classTrainName colorGray80">Sleeper (H)</span>
                            <div>
                                <span className="invoiceWidgetDetailleft">
                                    <span className="circleRoute"></span>
                                </span>
                                <span className="invoiceWidgetDetail colorGray">05.00</span>
                                <span className="invoiceWidgetDetail colorGray">Jakarta (GMBR)</span>
                            </div>
                            <div>
                                <span className="invoiceWidgetDetailleft">
                                    <span className="markerRoute"></span>
                                </span>
                                <span className="invoiceWidgetDetail colorGray80">21 Febuari 2020</span>
                                <span className="invoiceWidgetDetail colorGray80">Stasiun Gambir</span>
                            </div>
                            <br/>
                            <div>
                                <span className="invoiceWidgetDetailleft">
                                <span className="circleRoute circleRouteDark"></span>
                                </span>
                                <span className="invoiceWidgetDetail colorGray">05.00</span>
                                <span className="invoiceWidgetDetail colorGray">Jakarta (GMBR)</span>
                            </div>
                            <div>
                                <span className="invoiceWidgetDetailleft"></span>
                                <span className="invoiceWidgetDetail colorGray80">21 Febuari 2020</span>
                                <span className="invoiceWidgetDetail colorGray80">Stasiun Gambir</span>
                            </div>
                        </div>
                            
                    </div>


                </div>

                <Modal show={this.state.showModal} onHide={this.handleModal} className="modalContent">
                    <div className="modalInfoPayment">
                        <p>Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam Untuk melihat pesanan <b onClick={this.handleShowOrder}>Klik Disini</b> Terimakasih</p>
                    </div>
                </Modal>


            </div>
        )
    }
}

export default Payment