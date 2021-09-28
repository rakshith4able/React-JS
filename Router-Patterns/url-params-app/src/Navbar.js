import React, { Component } from 'react'
import "./Navbar.css"
import { withRouter } from 'react-router-dom'

// Navbar is out of link for routes So to make it understand to push in to history
// we use handle
class Navbar extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        alert("You logged In");
        this.props.history.push("/food/chicken");
    }

    render() {
        return (
            <div className="Navbar">
                <button onClick={this.handleLogin}>Log In</button>
                {/* TO add Back button using history */}
                <button onClick={this.props.history.goBack}>Back</button>
            </div>
        )
    }
}
// We export the component class in withRouter
export default withRouter(Navbar);