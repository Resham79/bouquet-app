import React, { Component } from 'react'

class SignUp extends Component {

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                address: this.state.address,
                phone: this.state.phone
            })
        })
        .then (res => res.json())
        .then (console.log)
    }

    render() {
        return (
            <div>Sign up
            <form onSubmit = {(e) => this.signUp(e)}>
            <input onChange = {(e) => this.handleChange(e)} name="username" type="text" placeholder = "username"/>
            <input onChange = {(e) => this.handleChange(e)} name="password" type="password" placeholder = "password"/>
            <input onChange = {(e) => this.handleChange(e)} name="confirmPassword" type="password" placeholder = "confirm password"/>
            <input onChange = {(e) => this.handleChange(e)} name="email" type="text" placeholder = "email"/>
            <input onChange = {(e) => this.handleChange(e)} name="address" type="text" placeholder = "address"/>
            <input onChange = {(e) => this.handleChange(e)} name="phone" type="text" placeholder = "phone"/>
            <input type="submit" value="Submit" />
            </form>
            </div>
        )}



}

export default SignUp