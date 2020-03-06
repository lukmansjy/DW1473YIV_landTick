import React, { Fragment } from 'react'
import { DropdownButton, Dropdown, SplitButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavAdmin = () =>{

    const handleSelect = (eventKey) =>{
        console.log(eventKey)
    }

    return(
        <div>
            <div>
                <label for="dropdown-menu" className="labelClassWraperProileNav">
                    <p>Admin</p> 
                    <div className="classWraperProileNav">
                        <img className src={require('../assets/icons/user-white-icon.png')}/>
                    </div>
                </label>
                <DropdownButton drop='left' id="dropdown-menu" onSelect={handleSelect} className="dropdwonMenuUser">
                    
                        <Dropdown.Item as="button" eventKey={1}>
                            <Link to="/admin/add-ticket">
                                <span className="listMenuUser">
                                    <img src={require('../assets/icons/ticket-add-icon.png')} width="30px"/>
                                    <span>Tambah Tiket</span>
                                </span>
                            </Link>
                        </Dropdown.Item>

                        <Dropdown.Item as="button" eventKey={2}>
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

export default NavAdmin