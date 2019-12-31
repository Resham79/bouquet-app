import React, { Component } from 'react'
import Cart from './Cart'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


class BouquetView extends Component {

Purchase = () => {
    this.props.history.push({
        pathname: "/cart",
        state: {
            bouquet: this.props.location.state.bouquet
        }
    })
    console.log('I am buying this')
}

    render () {
        
        return (
            <div>
<table>
    <tr>
    <th><img src = {this.props.location.state.bouquet.img_url}></img></th>
    <th><div>
        <h1>{this.props.location.state.bouquet.name}</h1>   
        <h3>{this.props.location.state.bouquet.description}</h3>
        <h3>{this.props.location.state.bouquet.price}</h3>  
        <button onClick = {() => this.Purchase()}>Add to Cart</button>
    </div></th>
    </tr> 
</table>
            </div>
        )}


}

export default BouquetView