import React, { Fragment, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toFullDayName, toIdr } from '../utils'


const CardTicket = (props)=>{

    const [state, setState] = useState({
      showModalEticket: false
    })

    const handleModalEticket = ()=>{
      if(props.ticket.status === 'Approved'){
        setState({
          ...state,
          showModalEticket: !state.showModalEticket
        })
      }
    }

    const {train, user, status, qty, totalPrice, id} = props.ticket
    return(
        <div>
          <div className="ticketWrapper">
            <div className="ticketLogo">
              <span>LandTick</span>
              <img src={require('../assets/icons/brand-icon.png')} alt="brand"/>
            </div>
            <div className="detailTicketWrap">
              <span className="ticketTitleWrap">
                <h2 className="ticketTitle">Kereta Api</h2>
                <span className="ticketDay">{toFullDayName(train.dateStart)}</span>
                <span className="ticketDateTime"></span>
              </span>
              <div>
                <span className="deatailTicket detailTicketTitle">{train.nameTrain}</span>
                <span className="deatailTicket circleRouteWrap"><span className="circleRoute"></span></span>
                <span className="deatailTicket detailTicketTitleSubtitle">{train.startTime}</span>
                <span className="deatailTicket detailTicketTitleSubtitle"></span>
              </div>
              <div className="lineHorizon"></div>
              <div>
                <span className="deatailTicket textDisable">{train.typeTrain.name}</span>
                <span className="deatailTicket"></span>
                <span className="deatailTicket textDisable">{toFullDayName(train.dateStart)}</span>
                <span className="deatailTicket textDisable"><b>{train.startStation}</b></span>
              </div>
              <div>
                <span className="deatailTicket"><span className={`info${status}`}>{status}</span></span>
                <span className="deatailTicket circleRouteWrap"><span className="circleRoute circleRouteDark"></span></span>
                <span className="deatailTicket detailTicketTitleSubtitle">{train.arrivalTime}</span>
                <span className="deatailTicket detailTicketTitleSubtitle"></span>
              </div>
              <div>
                <span className="deatailTicket fontColorGreen">Quantity: {qty} Tiket</span>
                <span className="deatailTicket fontColorGreen">Total: {toIdr(totalPrice)}</span>
                <span className="deatailTicket textDisable">{toFullDayName(train.dateStart)}</span>
                <span className="deatailTicket textDisable"><b>{train.destinationStation}</b></span>
              </div><br/>
              <div>
                <span className="deatailTicket textInfo">No. Tanda Pengenal</span>
                <span className="deatailTicket textInfo">Nama Pemesan</span>
                <span className="deatailTicket textInfo">No Handphone</span>
                <span className="deatailTicket textInfo">Email</span>
              </div>
                <div className="footerMarkTicket"></div>
                <span className="deatailTicket textDisable">5234878239272</span>
                <span className="deatailTicket textDisable">{user.name}</span>
                <span className="deatailTicket textDisable">{user.phone}</span>
                <span className="deatailTicket textDisable">{user.email}</span>
                <span className="deatailTicket">
                  {status === 'Approved' ? 
                    <button className="btnBuyTicket btnHoverDark" onClick={handleModalEticket}>Lihat E-tiket</button> 
                    :

                    <Fragment>
                      {status === "Cancel" ? null : 
                    
                        <Link to={`/payment/${id}`}>
                          <button className="btnBuyTicket btnHoverDark">Bayar Sekarang</button>
                        </Link>

                      }
                    </Fragment>
                    
                  }
                </span>
            </div>
          </div>

          <Modal show={state.showModalEticket} onHide={handleModalEticket} className="modalInvoiceAdminWrapper">
              <div className="modalInvoiceAdmin">
                  <div className="ticketLogo">
                      <span>LandTick</span>
                      <img src={require('../assets/icons/brand-icon.png')} alt="brand"/>
                      <button className="btnModalClose hoverBtnDrak" onClick={handleModalEticket}>X</button>
                  </div>
                  <div className="bodyModalInvoice">
                      <div className="ticketDetail">
                        <center>
                          <h3 className="detailTicketTitle">E-Ticket</h3>
                          <p className="textDisable">Kode Invoice: INV101</p>
                        </center>
                      </div>
                      <div className="ticketDetail">
                          <h4>Kereta Api</h4>
                          <p className="textDisable">{toFullDayName(train.dateStart)}</p>
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
                              <span className="etiketInfoIcon">
                                <img src={require('../assets/icons/ticket-icon.png')} width="50px" alt="ticket"/>
                              </span>
                              <span className="etiketInfo textDisable">Tunjukkan e-ticket dan identitas para penumpang saat checkin</span>
                              
                              <span className="etiketInfoIcon">
                                <img src={require('../assets/icons/time-icon.png')} width="50px" alt="time"/>
                              </span>
                              <span className="etiketInfo textDisable">Check-in paling lambat <b>90 menit</b> sebelum keberangkatan</span>
                              
                              <span className="etiketInfoIcon">
                                <img src={require('../assets/icons/warning-icon.png')} width="50px" alt="warning"/>
                              </span>
                              <span className="etiketInfo textDisable">Waktu tertera adalah waktu stasiunsetempat</span>
                              
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

                          <div className="wraperBarcode">
                            <div className="wraperBill">
                                <img src={require('../assets/images/qr-code.png')} alt="qrcode"/><br/>
                                <span className="textDisable"><center>TKC101</center></span>
                            </div>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </Modal>

        </div>
    )
}

export default CardTicket