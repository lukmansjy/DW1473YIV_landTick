import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../_actions/usersA'


const NavAdmin = (props) =>{
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
                <label for="dropdown-menu" className="labelClassWraperProileNav">
                    <p>{props.user.name}</p> 
                    <div className="classWraperProileNav">
                        <img className src={require('../assets/icons/user-white-icon.png')} alt="user"/>
                    </div>
                </label>
                <DropdownButton drop='left' id="dropdown-menu" onSelect={handleSelect} className="dropdwonMenuUser">
                    
                        <Dropdown.Item as="button" eventKey={1}>
                            <Link to="/admin/add-ticket">
                                <span className="listMenuUser">
                                    <img src={require('../assets/icons/ticket-add-icon.png')} width="30px" alt="add"/>
                                    <span>Tambah Tiket</span>
                                </span>
                            </Link>
                        </Dropdown.Item>

                        <Dropdown.Item as="button" eventKey={2}>
                            <Link to="/admin">
                                <span className="listMenuUser">
                                    <img src={require('../assets/icons/ticket-icon.png')} width="30px" alt="ticket"/>
                                    <span>List Transaksi</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavAdmin)