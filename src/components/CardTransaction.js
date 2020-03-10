import React, { Fragment, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { toFullDayName, toIdr } from '../utils'


const CardTransaction = (props)=>{
    const {id, qty, totalPrice, status, user, train, attachment} = props.dataOrder
    const [state, setState] = useState({
        showModalEdit: false,
        showModalView: false,
        dataActions: ['Approved', 'Pending', 'Cancel'],
        status: null
    })

    useEffect(()=>{
        if(state.status === null){
            setState({
                ...state,
                status: status
            })
        }
        if(!props.onEdit && state.showModalEdit){
            handleModalEditHide()
        }
    })

    var listBackground = ''
    if(props.index % 2 === 1){
        listBackground = 'listBackground'
    }
    const handleModalEditShow = ()=>{
        props.handleOnEdit()
        setState({
            ...state,
            showModalEdit: true
        })
    }

    const handleModalEditHide = ()=>{
        setState({
            ...state,
            showModalEdit: false
        })
    }

    const handleModalView = ()=>{
        setState({
            ...state,
            showModalView: !state.showModalView
        })
    }

    const toNameFile = (url) =>{
        if(url){
            const arr = url.split('/')
            return arr[arr.length-1]
        }else{
            return '-'
        }
        
    }

    const handleChangeStatus = (event) =>{
        setState({
            ...state,
            status: event.target.value
        })
    }

    const handleEdit = ()=>{
        const data = {
            status: state.status
        }
        props.handleEdit(id, data)
    }
    return(
        <Fragment>
            <div className={`tableBody ${listBackground}`}>
                <span className="tableRowTransactionNo"><b>{props.index + 1}</b></span>
                <span className="tableRowTransaction">{user.name}</span>
                <span className="tableRowTransactionTicket">{`${train.startStation} - ${train.destinationStation}`}</span>
                <span className="tableRowTransaction">{toNameFile(attachment)}</span>
                <span className={`tableRowTransactionStatus info${status}Min`}>{status}</span>
                <span className="tableRowTransactionStatus">
                    <span className="tableAction">
                        <img src={require('../assets/icons/search-icon.png')} onClick={handleModalView} alt="search"/>
                    </span>
                    <span className="tableAction">
                        <img src={require('../assets/icons/edit-icon.png')} onClick={handleModalEditShow} alt="edit"/>
                    </span>
                    <span className="tableAction">
                        {/* <img src={require('../assets/icons/delete-icon.png')} /> */}
                    </span>
                </span>
            </div>

            <Modal show={state.showModalEdit} onHide={handleModalEditHide}>
                <div>
                    <div className="ticketLogo">
                        <span>LandTick</span>
                        <img src={require('../assets/icons/brand-icon.png')} alt="brand"/>
                    </div>
                    <div className="editForm">
                        <h5><center>Edit Tiket</center></h5>
                        <label>Quantity</label><br/>
                        <input type="text" className="myInputTextEdit" value={qty} disabled/><br/>
                        <label>Nama</label><br/>
                        <input type="text" className="myInputTextEdit" value={user.name} disabled/><br/>
                        <label>Jalur</label><br/>
                        <input type="text" className="myInputTextEdit" value={`${train.startStation} - ${train.destinationStation}`} disabled/><br/>
                        <label>File Bukti Transfer</label><br/>
                        <input type="text" className="myInputTextEdit" value={toNameFile(attachment)} disabled/><br/>
                        <label>Action</label><br/>
                        <select className="myInputTextEdit" onChange={handleChangeStatus}>
                            {state.dataActions.map( (action, index) => (
                                <Fragment>
                                    {action === status ? 
                                        <option key={index} value={action} selected>{action}</option>
                                    :
                                    <option key={index} value={action}>{action}</option>}
                                </Fragment>
                            ))}
                        </select>
                        <center>
                            <button onClick={handleEdit} className="btnSave">Save</button>
                        </center>
                    </div>
                </div>
            </Modal>

            <Modal show={state.showModalView} onHide={handleModalView} className="modalInvoiceAdminWrapper">
                <div className="modalInvoiceAdmin">
                    <div className="ticketLogo">
                        <span>LandTick</span>
                        <img src={require('../assets/icons/brand-icon.png')} alt="brand"/>
                        <button className="btnModalClose hoverBtnDrak" onClick={handleModalView}>X</button>
                    </div>
                    <div className="bodyModalInvoice">
                        <div className="ticketDetail">
                            <h3 className="detailTicketTitle">INVOICE</h3>
                            <p className="textDisable">Kode Invoice: INV101</p>
                        </div>
                        <div className="ticketDetail">
                            <h4>Kereta Api</h4>
                            <p className="textDisable">{toFullDayName(train.dateStart)}</p>
                            <span className="textDisable"><b>Qty: {qty}, @{toIdr(train.price)}</b></span>
                            <br/><br/>
                            <div>
                                <span className="listTicketMark"><span className="circleRoute"></span></span>
                                    <span className="listTicket detailTicketTitleSubtitle">{train.startTime}</span>
                                <span className="listTicket detailTicketTitleSubtitle"></span>
                            </div>
                            <div className="lineModalTrans"></div>
                            <div>
                                <span className="listTicketMark"></span>
                                <span className="listTicket textDisable">{toFullDayName(train.dateStart)}</span>
                                <span className="listTicket textDisable"><b>{train.startStation}</b></span>
                            </div><br/><br/>
                            <div>
                                <span className="listTicketMark"><span className="circleRoute circleRouteDark"></span></span>
                                <span className="listTicket detailTicketTitleSubtitle">{train.arrivalTime}</span>
                                <span className="listTicket detailTicketTitleSubtitle"></span>
                            </div>
                            <div>
                                <span className="listTicketMark"></span>
                                <span className="listTicket textDisable">{toFullDayName(train.dateStart)}</span>
                                <span className="listTicket textDisable"><b>{train.destinationStation}</b></span>
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
                                <span className="listTicket textDisable">{user.name}</span>
                                <span className="listTicket textDisable">{user.phone}</span>
                                <span className="listTicket textDisable">{user.email}</span>
                            </div>

                            <hr/>

                            <div className="foterModalTransaction">
                                <span className="foterModalTotal">Total</span>
                                <span className="foterModalNominal">{toIdr(totalPrice)}</span>
                            </div>

                            <div className="wraperBarcode">
                                <img src={require('../assets/images/qr-code.png')} alt="qrcode"/><br/>
                            <span><center>INV101</center></span>
                            
                                {attachment !== null ? 
                                    <div className="wraperBill">
                                        <img src={attachment} alt="Payment Proof"/><br/>
                                        <span className="textDisable"><center>Buti Transfer</center></span>
                                    </div>
                                    :null
                                }
                                
                        </div>
                        </div>
                        
                    </div>
                </div>
            </Modal>

        </Fragment>
    )
}

export default CardTransaction