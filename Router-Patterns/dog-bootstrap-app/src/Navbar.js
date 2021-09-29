import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Dogs</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {this.props.dogs.map((dog) => {
                            return (<li className="nav-item">
                                <Link class="nav-link" to={`/dogs/${dog.name}`}>{dog.name}</Link>
                            </li>)
                        })}


                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
