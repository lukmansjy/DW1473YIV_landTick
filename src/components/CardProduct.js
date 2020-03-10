import React, { Fragment } from 'react'
import {toIdr, toFullDayName, timeRange} from '../utils'

const CardProduct = (props) =>{
    const {nameTrain, dateStart, startStation, startTime, destinationStation, arrivalTime, price, typeTrain} = props.ticket
    const dateTimeStart = `${dateStart} ${startTime}`
    const dateTimeEnd = `${dateStart} ${arrivalTime}`

    const handlePrepareOrder = ()=>{
        // qty from parent
        let qty = props.qty
        if(qty === 0){
            qty = 1
        }
        const dataOrder = {
            trainId: props.ticket.id,
            qty: qty
        }

        // handle order from parent
        props.handleOrderTicket(dataOrder)
    }

    return(
        <Fragment>

            {props.index === 0 ? 
            
                <div className="containerList">
                    <span className="listTitle">Nama Kereta</span>
                    <span className="listTitle">Berangkat</span>
                    <span className="listTitle">Tiba</span>
                    <span className="listTitle">Durasi</span>
                    <span className="listTitle">Harga Per Orang</span>
                </div>
        
                : null
            }

            <div className="listKereta">
                <div className="wrapperDate">
                    <span>{toFullDayName(dateStart)}</span>
                </div>
                <div>
                    <span className="listKeretaItem">{nameTrain}</span>
                    <span className="listKeretaItem">{startTime}
                        <img src={require('../assets/icons/arrow-right-black.png')} alt="arrow right"/>
                    </span>
                    <span className="listKeretaItem">{arrivalTime}</span>
                    <span className="listKeretaItem">{timeRange(dateTimeStart, dateTimeEnd)}</span>
                    <span className="listKeretaItem labelHarga">{toIdr(price)}</span>
                </div>
                <div>
                    <span className="listKeretaItemDetail">{typeTrain.name}</span>
                    <span className="listKeretaItemDetail">{startStation}</span>
                    <span className="listKeretaItemDetail">{destinationStation}</span>
                    <span className="listKeretaItemDetail"></span>
                    <span className="listKeretaItemDetail">
                        {props.user.loginStatus && !props.user.admin ? <button className="myButton" onClick={handlePrepareOrder}>Beli</button> : null }
                    </span>

                </div>
            </div>
        </Fragment>
    )
}

export default CardProduct