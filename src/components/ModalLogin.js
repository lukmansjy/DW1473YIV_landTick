import React from 'react'
import { Modal } from 'react-bootstrap'
import Loading from './Loading'

const ModalLogin = (props) =>{
    return(
        <Modal show={props.show} onHide={props.handleModalLogin} className="modalContent">
            <div>
                <span className="modalTitle">Login</span>
                <button className="btnModalClose hoverBtnDrak" onClick={props.handleModalLogin}>X</button>
            </div>
            <form onSubmit={props.handleLogin}>
                <div className="formModal">
                    <input type="text" className="myInputText mb-4 pl-1" name="username" placeholder="Username"/><br/>
                    <input type="password" className="myInputText mb-4 pl-1" name="password" placeholder="Password"/><br/>
                    
                    {props.dataError ? <p className="errorMsg">{props.dataError.message}</p> : null}
                    {props.isLoading ? <Loading/> : <button type="submit" className="btnModal hoverBtnDrak">Login</button>}
                    
                </div>
            </form>
        </Modal>
    )
}

export default ModalLogin