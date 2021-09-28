import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommonStyle from './CommonStyle';
import './Home.css';
class Home extends Component {
    render() {
        return (
            <div className="Home">

                <CommonStyle>
                    <h1>I am Home</h1>
                </CommonStyle>
                <Link to="/">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>

            </div >
        );
    }
}

export default Home;