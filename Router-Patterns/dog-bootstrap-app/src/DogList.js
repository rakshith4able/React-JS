import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

class DogList extends Component {
    render() {
        return (

            <div className="DogList">
                <h1 className="display-1 text-center">Dog List</h1>
                <div className="container">
                    <div className="row">
                        {this.props.dogs.map((dog) => (
                            <div className="col-lg-4 Dog">
                                <img src={dog.src} alt={dog.name} />
                                <h3><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></h3>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        )
    }
}

export default DogList;
