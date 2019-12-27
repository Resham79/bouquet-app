import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import BouquetCard from './BouquetCard'

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
        return (
            <div>
                {bouquets?
                <div>
                <div>Choose from a variety of bouquets!</div>
                <button onClick = {() => this.logOut()}>LogOut</button>
                    <ul>
                        {bouquets.map(bouquet => 
                           <div>
                            <BouquetCard {...bouquet}/>
                            <Link to={{
                            pathname: `/bouquets/${bouquet.id}`,
                            state: {
                                bouquet
                            }
                            }}>
                            <li id = {bouquet.id} onClick = {(e) => this.handleChange(e)}>{`${bouquet.name}`}</li></Link>
                            </div>)}
                    </ul>
                
                </div>
                :
                ''
                }
            </div>  
        )}



}

export default Bouquets