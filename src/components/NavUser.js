import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../_actions/usersA'


const NavUser = (props) =>{
    const handleSelect = (eventKey) =>{
        if(eventKey === "3"){
            window.localStorage.removeItem('token')
            props.userLogout()
            props.handleLogout()
        }
    }
    return(
        <div>
            <div>
                {/* <img src={require('../assets/icons/user-white-icon.png')}/> */}
                <label htmlFor="dropdown-menu" className="labelClassWraperProileNav">
                    <p>{props.user.name}</p> 
                    <div className="classWraperProileNav">
                        <img src={require('../assets/icons/user-white-icon.png')} alt="user"/>
                    </div>
                </label>
                <DropdownButton drop='left' id="dropdown-menu" title="" onSelect={handleSelect} className="dropdwonMenuUser">
                    
                        <Dropdown.Item as="button" eventKey={1}>
                            <Link to="/ticket">
                                <span className="listMenuUser">
                                    <img src={require('../assets/icons/ticket-icon.png')} width="30px" alt="ticket"/>
                                    <span>Tiket Saya</span>
                                </span>
                            </Link>
                        </Dropdown.Item>

                        <Dropdown.Item as="button" eventKey={2}>
                            <Link to="/payment">
                                <span className="listMenuUser">
                                    <img src={require('../assets/icons/payment-icon.png')} width="30px" alt="payment"/>
                                    <span>Payment</span>
                                </span>
                            </Link>
                        </Dropdown.Item>

                        <Dropdown.Item as="button" eventKey={3}>
                            <span className="listMenuUser logutMenuList">
                                <img src={require('../assets/icons/logout-icon.png')} width="28px" alt="logout"/>
                                <span>Logout</span>
                            </span>
                        </Dropdown.Item>

                </DropdownButton>

            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        user: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: ()=> dispatch( userLogout() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavUser)