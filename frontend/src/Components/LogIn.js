import React, { Component } from 'react'

class LogIn extends Component {

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then (res => res.json())
        .then (userInfo => {
            localStorage.token = userInfo.token
            if (userInfo.token){
                
                this.props.history.push("/bouquets")
            }
            else {
                console.log(userInfo.error)
            }
        })
    }
    

    render() {
        return (
            <div>
                <form onSubmit = {(e) => this.login(e)}>
                <input onChange = {(e) => this.handleChange(e)} name="username" type="text" placeholder = "username"/>
                <input onChange = {(e) => this.handleChange(e)} name="password" type="password" placeholder = "password"/>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )}



}

export default LogIn