import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import './index.css';

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
            body: JSON.stringify(
                {user: {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                address: this.state.address,
                phone: this.state.phone
            }})
        })
        .then (res => res.json())
        .then (() => this.props.history.push("/login"))
        
    }

    render() {
        return (<div className="bg">
            <div><h1>Sign up for your Bouquet delivery here!</h1>
            <form onSubmit = {(e) => this.signUp(e)}>
            <input onChange = {(e) => this.handleChange(e)} name="username" type="text" placeholder = "username"/>
            <input onChange = {(e) => this.handleChange(e)} name="password" type="password" placeholder = "password"/>
            <input onChange = {(e) => this.handleChange(e)} name="confirmPassword" type="password" placeholder = "confirm password"/>
            <input onChange = {(e) => this.handleChange(e)} name="email" type="text" placeholder = "email"/>
            <input onChange = {(e) => this.handleChange(e)} name="address" type="text" placeholder = "address"/>
            <input onChange = {(e) => this.handleChange(e)} name="phone" type="text" placeholder = "phone"/>
            <Button variant="success">< input type="submit" value="Submit" /></Button>
            
            </form>
            </div>
            </div>
        )}



}

export default SignUp