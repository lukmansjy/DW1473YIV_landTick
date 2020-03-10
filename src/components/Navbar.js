import React, { Fragment, useState } from 'react'
import NavUser from './NavUser'
import NavLogin from './NavLogin'
import { Link, Redirect } from 'react-router-dom'
import NavAdmin from './NavAdmin'

const Navbar = (props) =>{
    const [state, setState] = useState({
        loguot: false
    })

    const handleLogout = ()=>{
        setState({
            ...state,
            loguot: true
        })
    }

    return(
        <Fragment>
            {state.loguot ? <Redirect to="/" /> : null}
            <div className="navbar">
                <Link to="/">
                <div className="navBarLeft">
                        <span>LandTick</span>
                        <img src={require('../assets/icons/brand-icon.png')} className="brandIconNav" alt="brand"/>
                </div>
                </Link>


                <div className="navBarRight">

                    {props.user.loginStatus ? 

                        <Fragment>
                            {props.user.admin ? <NavAdmin handleLogout={handleLogout}/> : <NavUser handleLogout={handleLogout}/>}
                        </Fragment>

                    : <NavLogin 
                        handleModalLogin={props.handleModalLogin}
                        handleModalRegister={props.handleModalRegister}
                
                    />}

                </div>

            </div>
        </Fragment>
    )
}

export default Navbar