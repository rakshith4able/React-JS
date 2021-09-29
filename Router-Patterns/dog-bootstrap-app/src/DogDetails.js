import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogDetails.css';

class DogDetails extends Component {
    render() {
        return (
            <div className="DogDetails">
                <h1 className="display-1 text-center">Dog Details</h1>
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="card col-4 dog">
                            <img className="card-img-top" src={this.props.dog.src} alt={this.props.dog.name} />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.dog.name}</h5>
                                <h6 className="card-subtitle text-muted">{`${this.props.dog.age} years old`}</h6>
                                <ul class="list-group list-group-flush">
                                    {this.props.dog.facts.map(
                                        (fact) => {
                                            return <li class="list-group-item">{fact}</li>
                                        }

                                    )}


                                </ul>
                                <Link to="/dogs" className="btn btn-primary">Go back</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default DogDetails;
