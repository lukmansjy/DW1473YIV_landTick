import React from 'react'
import { Modal } from 'react-bootstrap'

const ModalRegister = (props) =>{
    return(
        <Modal show={props.show} onHide={props.handleModalRegister}  className="modalContent" style={{marginTop: 30}}>
            <div>
                <span className="modalTitle">Daftar</span>
                <button className="btnModalClose hoverBtnDrak" onClick={props.handleModalRegister}>X</button>
            </div>
            <form onSubmit={props.handleRegister}>
                <div className="formModal">
                    <input type="text" className="myInputText mb-4 pl-1" name="name" placeholder="Name"/><br/>
                    <input type="text" className="myInputText mb-4 pl-1" name="username" placeholder="Username"/><br/>
                    <input type="email" className="myInputText mb-4 pl-1" name="email" placeholder="Email"/><br/>
                    <input type="password" className="myInputText mb-4 pl-1" name="password" placeholder="Password"/><br/>
                    <select className="myInputText mb-4 pl-1" name="gender">
                        <option value="Male" selected>Male</option>
                        <option value="Famale" selected>Famale</option>
                    </select>
                    <input type="number" className="myInputText mb-4 pl-1" name="phone" placeholder="Phone"/><br/>
                    <input type="text" className="myInputText mb-4 pl-1" name="address" placeholder="Address"/><br/>
                    {props.errRegister ? <p className="errorMsg pb-1">Semua input harus diisi!</p> : null}
                    <button type="submit" className="btnModal hoverBtnDrak" type="submit">Daftar</button>
                </div>
            </form>
        </Modal>
    )
}

export default ModalRegister