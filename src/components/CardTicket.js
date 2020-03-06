import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'

const CardTicket = ()=>{

    const [state, setState] = useState({
      showModalEticket: false
    })

    const handleModalEticket = ()=>{
      setState({
        ...state,
        showModalEticket: !state.showModalEticket
      })
    }

    return(
        <div>
          <div className="ticketWrapper" onClick={handleModalEticket}>
            <div className="ticketLogo">
              <span>LandTick</span>
              <img src={require('../assets/icons/brand-icon.png')} />
            </div>
            <div className="detailTicketWrap">
              <span className="ticketTitleWrap">
                <h2 className="ticketTitle">Kereta Api</h2>
                <span className="ticketDay">Minggu, </span>
                <span className="ticketDateTime">21 Febuari 2030</span>
              </span>
              <div>
                <span className="deatailTicket detailTicketTitle">Argo Sanjaya</span>
                <span className="deatailTicket circleRouteWrap"><span className="circleRoute"></span></span>
                <span className="deatailTicket detailTicketTitleSubtitle">05.00</span>
                <span className="deatailTicket detailTicketTitleSubtitle">Jakarta (GMR)</span>
              </div>
              <div className="lineHorizon"></div>
              <div>
                <span className="deatailTicket textDisable">Sleeper</span>
                <span className="deatailTicket"></span>
                <span className="deatailTicket textDisable">21 Febuari 2030</span>
                <span className="deatailTicket textDisable">Stasiun Gambir</span>
              </div>
              <div>
                <span className="deatailTicket"><span className="infoPending">Pending</span></span>
                <span className="deatailTicket circleRouteWrap"><span className="circleRoute circleRouteDark"></span></span>
                <span className="deatailTicket detailTicketTitleSubtitle">10.00</span>
                <span className="deatailTicket detailTicketTitleSubtitle">Wuhan (WHN-CN)</span>
              </div>
              <div>
                <span className="deatailTicket"></span>
                <span className="deatailTicket"></span>
                <span className="deatailTicket textDisable">28 Febuari 2030</span>
                <span className="deatailTicket textDisable">Stasiun Wuhan China</span>
              </div><br/>
              <div>
                <span className="deatailTicket textInfo">No. Tanda Pengenal</span>
                <span className="deatailTicket textInfo">Nama Pemesan</span>
                <span className="deatailTicket textInfo">No Handphone</span>
                <span className="deatailTicket textInfo">Email</span>
              </div>
                <div className="footerMarkTicket"></div>
                <span className="deatailTicket textDisable">5234878239272</span>
                <span className="deatailTicket textDisable">Lukman Sanjaya</span>
                <span className="deatailTicket textDisable">082226455525</span>
                <span className="deatailTicket textDisable">lukman.rocks@live.com</span>
                <span className="deatailTicket">
                  <Link to="/payment">
                    <button className="btnBuyTicket btnHoverDark">Bayar Sekarang</button>
                  </Link>
                </span>
            </div>
          </div>

          <Modal show={state.showModalEticket} onHide={handleModalEticket} className="modalInvoiceAdminWrapper">
              <div className="modalInvoiceAdmin">
                  <div className="ticketLogo">
                      <span>LandTick</span>
                      <img src={require('../assets/icons/brand-icon.png')} />
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
                              <span className="etiketInfoIcon">
                                <img src={require('../assets/icons/ticket-icon.png')} width="50px"/>
                              </span>
                              <span className="etiketInfo textDisable">Tunjukkan e-ticket dan identitas para penumpang saat checkin</span>
                              
                              <span className="etiketInfoIcon">
                                <img src={require('../assets/icons/time-icon.png')} width="50px"/>
                              </span>
                              <span className="etiketInfo textDisable">Check-in paling lambat <b>90 menit</b> sebelum keberangkatan</span>
                              
                              <span className="etiketInfoIcon">
                                <img src={require('../assets/icons/warning-icon.png')} width="50px"/>
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
                              <span className="listTicket textDisable">Lukman Sanjaya</span>
                              <span className="listTicket textDisable">082226455525</span>
                              <span className="listTicket textDisable">lukman.rocks@live.com</span>
                          </div>

                          <div className="wraperBarcode">
                              {/* <img src={require('../assets/images/qr-code.png')}/><br/>
                          <span><center>INV101</center></span> */}
                          <div className="wraperBill">
                              <img src={require('../assets/images/qr-code.png')}/><br/>
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