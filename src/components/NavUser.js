import React, { Fragment } from 'react'
import { DropdownButton, Dropdown, SplitButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavUser = (props) =>{

    const handleSelect = (eventKey) =>{
        console.log(eventKey)
    }

    return(
        <div>
            {/* <span>Lukman Sanjaya</span> */}
            <div>
                {/* <img src={require('../assets/icons/user-white-icon.png')}/> */}
                <label for="dropdown-menu" className="labelClassWraperProileNav">
                    <p>Lukman Sanjaya</p> 
                    <div className="classWraperProileNav">
                        <img className src={require('../assets/icons/user-white-icon.png')}/>
                    </div>
                </label>
                <DropdownButton drop='left' id="dropdown-menu" onSelect={handleSelect} className="dropdwonMenuUser">
                    
                        <Dropdown.Item as="button" eventKey={1}>
                            <Link to="/ticket">
                                <span className="listMenuUser">
                                    <img src={require('../assets/icons/ticket-icon.png')} width="30px"/>
                                    <span>Tiket Saya</span>
                                </span>
                            </Link>
                        </Dropdown.Item>

                        <Dropdown.Item as="button" eventKey={2}>
                            <Link to="/payment">
                                <span className="listMenuUser">
                                    <img src={require('../assets/icons/payment-icon.png')} width="30px"/>
                                    <span>Payment</span>
                                </span>
                            </Link>
                        </Dropdown.Item>

                        <Dropdown.Item as="button" eventKey={3}>
                            <span className="listMenuUser logutMenuList">
                                <img src={require('../assets/icons/logout-icon.png')} width="28px"/>
                                <span>Logout</span>
                            </span>
                        </Dropdown.Item>

                </DropdownButton>

            </div>
        </div>
    )
}

export default NavUser