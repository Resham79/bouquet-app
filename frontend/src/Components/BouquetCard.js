import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


class BouquetCard extends Component {

    render(){
        console.log(this.props)
        return (
            <div>
            {/* <h3>{this.props.name}</h3> */}
            <img src={this.props.img_url} width="250" height="250" ></img>
            </div>
             )
            }

}

export default BouquetCard