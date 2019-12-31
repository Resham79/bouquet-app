import React, { Component } from 'react'
import './index.css';

class Cart extends Component {

    confirmPurchase = () => {
        console.log(this.props.location.state.bouquet)
        debugger
        fetch("http://localhost:3000/orders",{
            method: "POST",
            headers:  {
                'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.token}`,
              },
              body: JSON.stringify({
                user_id: parseInt(localStorage.id),
                bouquet_id: this.props.location.state.bouquet.id
              })
            })
            .then(res => res.json())
            .then(console.log)
        this.props.history.push({
            pathname: "/purchase",
            state: {
                bouquet: this.props.location.state.bouquet
            }
        })
    }

    render() {
        console.log(this.props.location.state.bouquet)
        return (
        <div>

            <div>Cart</div>

            <table>
            <tr>
            <th><img src = {this.props.location.state.bouquet.img_url} width="400" height="400"></img></th>
            <th>
            <h1>{this.props.location.state.bouquet.name}</h1>   
            <h1>Total: {this.props.location.state.bouquet.price}</h1>
            <button onClick = {() => this.confirmPurchase()}>Confirm Purchase</button>
            </th>
            </tr>
            </table>
            
        </div>
            
        )}



}

export default Cart