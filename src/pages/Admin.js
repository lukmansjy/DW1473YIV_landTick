import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardTransaction from '../components/CardTransaction'
import Navbar from '../components/Navbar'
import { approveOrder, getAllOrdersAdmin } from '../_actions/ordersA'
import { userLoginToken } from '../_actions/usersA'


class Admin extends Component{
    constructor(){
        super()
        this.state = {
            onEdit: false
        }
    }
    componentDidMount(){
        if(!this.props.user.loginStatus){
            const token = window.localStorage.getItem('token')
            if(token){
                this.props.userLoginToken(token)
            }
        }
        this.props.getAllOrdersAdmin()
    }
    
    handleEdit = (idOrder, data)=>{
        this.props.approveOrder(idOrder, data).then((data)=>{
            this.props.getAllOrdersAdmin()
            this.setState({
                onEdit: false
            })
        })
    }

    // Untuk Hanlde modal Edit
    handleOnEdit = ()=>{
        this.setState({
            onEdit: true
        })
    }

    render(){
        return(
            <div>
                
                <Navbar user={this.props.user} />
    
                <div>
                    <h3 className="title">List Transaksi</h3>
                </div>
                <div className="tableTransaction">
                    <div className="tableHeader">
                        <span className="tableRowTransactionNo">No</span>
                        <span className="tableRowTransaction">User</span>
                        <span className="tableRowTransactionTicket">Tiket</span>
                        <span className="tableRowTransaction">Bukti Transfer</span>
                        <span className="tableRowTransactionStatus">Status Payment</span>
                        <span className="tableRowTransactionStatus">Action</span>
                    </div>

                    {this.props.dataOrders.map((dataOrder, index) => (
                        <CardTransaction handleEdit={this.handleEdit} onEdit={this.state.onEdit} handleOnEdit={this.handleOnEdit} dataOrder={dataOrder} index={index} key={index}/>
                    ))}

                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return{
        user: state.users,
        dataOrders: state.orders.dataOrders
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllOrdersAdmin: ()=> dispatch( getAllOrdersAdmin() ),
        approveOrder: (idOrder, data)=> dispatch( approveOrder(idOrder, data) ),
        userLoginToken: (token)=> dispatch(userLoginToken(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)