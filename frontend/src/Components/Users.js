import React, { Component } from 'react'

class Users extends Component {

    componentDidMount() {
        fetch(`http://localhost:3000/users`)
          .then(res => res.json())
          .then(x => this.setState({ users: x }))
      }

    render() {
        return (
            <div>These are users.</div>
        )}



}

export default Users