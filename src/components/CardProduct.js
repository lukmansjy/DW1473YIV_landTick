import React from 'react'
import {Container, Row, Col, Modal, Form} from 'react-bootstrap'

const CardProduct = (props) =>{
    return(
        <div className="listKereta">
            <div>
                <span className="listKeretaItem">Argo Sanjaya</span>
                <span className="listKeretaItem">05:00
                    <img src={require('../assets/icons/arrow-right-black.png')}/>
                </span>
                <span className="listKeretaItem">22:55</span>
                <span className="listKeretaItem">1.000 Jam</span>
                <span className="listKeretaItem labelHarga">Rp. 2000.000.000</span>
            </div>
            <div>
                <span className="listKeretaItemDetail">Sleeper</span>
                <span className="listKeretaItemDetail">Gambir - Jakarta</span>
                <span className="listKeretaItemDetail">Wuhan - China</span>
                <span className="listKeretaItemDetail"></span>
                <span className="listKeretaItemDetail"></span>

            </div>
        </div>
    )
}

export default CardProduct