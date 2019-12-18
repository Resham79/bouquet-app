import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

class Bouquets extends Component {

    state = {
        bouquets: []
      }

    componentDidMount() {
        fetch(`http://localhost:3000/bouquets`)
          .then(res => res.json())
          .then(x => this.setState({ bouquets: x }))
      }

    handleChange = (e) => {
        console.log("handleChange",e)
        
    }

    logOut = () => {
        localStorage.clear()
        this.props.history.push("/login")
    }

    render() {
        const bouquets = this.state.bouquets
        console.log(bouquets)
        debugger
        return (
            <div>
                {bouquets?
                <div>
                <div>These are bouquets.</div>
                    <ul>
                        {bouquets.map(bouquet => <Link to={`/bouquets/${bouquet.id}`}><li id = {bouquet.id} onClick = {(e) => this.handleChange(e)}>{`${bouquet.name} ${bouquet.id}`}</li></Link>)}
                    </ul>
                <button onClick = {() => this.logOut()}>LogOut</button>
                </div>
                :
                ''
                }
            </div>  
        )}



}

export default Bouquets