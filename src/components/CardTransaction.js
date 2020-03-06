import React, { Fragment, useState } from 'react'
import { Modal } from 'react-bootstrap'

const CardTransaction = (props)=>{
    const [state, setState] = useState({
        showModalEdit: false,
        showModalView: false
    })
    var listBackground = ''
    if(props.index % 2 == 1){
        listBackground = 'listBackground'
    }
    const handleModalEdit = ()=>{
        setState({
            ...state,
            showModalEdit: !state.showModalEdit
        })
    }
    const handleModalView = ()=>{
        setState({
            ...state,
            showModalView: !state.showModalView
        })
    }

    return(
        <Fragment>
            <div className={`tableBody ${listBackground}`}>
                <span className="tableRowTransactionNo"><b>{props.index + 1}</b></span>
                <span className="tableRowTransaction">Lukman Sanjaya</span>
                <span className="tableRowTransaction">Surabaya - Jakarta</span>
                <span className="tableRowTransaction">bca.jpg</span>
                <span className="tableRowTransaction infoPendingMin">Pending</span>
                <span className="tableRowTransaction">
                    <span className="tableAction">
                        <img src={require('../assets/icons/search-icon.png')} onClick={handleModalView}/>
                    </span>
                    <span className="tableAction">
                        <img src={require('../assets/icons/edit-icon.png')} onClick={handleModalEdit}/>
                    </span>
                    <span className="tableAction">
                        <img src={require('../assets/icons/delete-icon.png')} />
                    </span>
                </span>
            </div>

            <Modal show={state.showModalEdit} onHide={handleModalEdit}>
                <div>
                    <div className="ticketLogo">
                        <span>LandTick</span>
                        <img src={require('../assets/icons/brand-icon.png')} />
                    </div>
                    <div className="editForm">
                        <h5><center>Edit Tiket</center></h5>
                        <label>Quantity</label><br/>
                        <input type="text" className="myInputTextEdit" value="3" disabled/><br/>
                        <label>Nama</label><br/>
                        <input type="text" className="myInputTextEdit" value="Lukman Sanjaya" disabled/><br/>
                        <label>Jalur</label><br/>
                        <input type="text" className="myInputTextEdit" value="Surabaya - Jakarta" disabled/><br/>
                        <label>File Bukti Transfer</label><br/>
                        <input type="text" className="myInputTextEdit" value="payment-12611.jpg" disabled/><br/>
                        <label>Action</label><br/>
                        <select className="myInputTextEdit">
                            <option value="books">Approve</option>
                            <option value="html">Pending</option>
                            <option value="css">Cancel</option>
                        </select>
                        <center>
                            <button className="btnSave">Save</button>
                        </center>
                    </div>
                </div>
            </Modal>

            <Modal show={state.showModalView} onHide={handleModalView} className="modalInvoiceAdminWrapper">
                <div className="modalInvoiceAdmin">
                    <div className="ticketLogo">
                        <span>LandTick</span>
                        <img src={require('../assets/icons/brand-icon.png')} />
                        <button className="btnModalClose hoverBtnDrak" onClick={handleModalView}>X</button>
                    </div>
                    <div className="bodyModalInvoice">
                        <div className="ticketDetail">
                            <h3 className="detailTicketTitle">INVOICE</h3>
                            <p className="textDisable">Kode Invoice: INV101</p>
                        </div>
                        <div className="ticketDetail">
                            <h4>Kereta Api</h4>
                            <p className="textDisable">Saturday, 21 Feb 2020</p>
                            <br/><br/>
                            <div>
                                <span className="listTicketMark"><span className="circleRoute"></span></span>
                                <span className="listTicket detailTicketTitleSubtitle">05.00</span>
                                <span className="listTicket detailTicketTitleSubtitle">Jakarta (GMR)</span>
                            </div>
                            <div className="lineModalTrans"></div>
                            <div>
                                <span className="listTicketMark"></span>
                                <span className="listTicket textDisable">21 Febuari 2020</span>
                                <span className="listTicket textDisable">Stasiun Gambir</span>
                            </div><br/><br/>
                            <div>
                                <span className="listTicketMark"><span className="circleRoute circleRouteDark"></span></span>
                                <span className="listTicket detailTicketTitleSubtitle">05.00</span>
                                <span className="listTicket detailTicketTitleSubtitle">Jakarta (GMR)</span>
                            </div>
                            <div>
                                <span className="listTicketMark"></span>
                                <span className="listTicket textDisable">21 Febuari 2020</span>
                                <span className="listTicket textDisable">Stasiun Gambir</span>
                            </div>

                            <hr/>

                            <div>
                                <span className="listTicket"><b>No. Tanda Pengenal</b></span>
                                <span className="listTicket"><b>Nama Pemesan</b></span>
                                <span className="listTicket"><b>No. Handphone</b></span>
                                <span className="listTicket"><b>Email</b></span>
                            </div>
                            <div>
                                <span className="listTicket textDisable">0345080758855</span>
                                <span className="listTicket textDisable">Lukman Sanjaya</span>
                                <span className="listTicket textDisable">082226455525</span>
                                <span className="listTicket textDisable">lukman.rocks@live.com</span>
                            </div>

                            <hr/>

                            <div className="foterModalTransaction">
                                <span className="foterModalTotal">Total</span>
                                <span className="foterModalNominal">Rp. 300.000</span>
                            </div>

                            <div className="wraperBarcode">
                                <img src={require('../assets/images/qr-code.png')}/><br/>
                            <span><center>INV101</center></span>
                            <div className="wraperBill">
                                <img src={require('../assets/images/qr-code.png')}/><br/>
                                <span className="textDisable"><center>Upload Payment Proof</center></span>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </Modal>

        </Fragment>
    )
}

export default CardTransaction