import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleClick() {
        alert("Added to DB!");
        this.props.history.push("/food/salmon");
    }


    render() {

        return (
            <div>
                <input type="text" value={this.state.query} onChange={this.handleChange} name="query" />
                <Link to={`/food/${this.state.query}`} >Search! </Link>
                {/* If we want to perform any other operations before redirecting to the link 
                    we can use history property
                */}
                <button onClick={this.handleClick}>Fake Database entry</button>
            </div>
        )
    }
}

export default SearchForm;