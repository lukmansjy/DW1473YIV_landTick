import React, { Fragment } from 'react'

const NavLogin = (props) =>{
    return(
        <Fragment>
            <button className="btnRegister" onClick={props.handleModalRegister}>Daftar</button>
            <button className="btnLogin" onClick={props.handleModalLogin}>Login</button>
        </Fragment>
    )
}

export default NavLogin