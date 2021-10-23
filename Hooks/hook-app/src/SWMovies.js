import React, { useState, useEffect } from "react";
import axios from 'axios';
function SWMovies() {

    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState('');
    useEffect(
        async () => {
            const response = await axios.get(`https://swapi.dev/api/films/${number}/`)
            setMovie(response.data.title);
        }
    );

    return (<div>
        <h2>you chose {number}</h2>
        <h2>{movie}</h2>
        <select value={number} onChange={e => setNumber(e.target.value)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>

        </select>
    </div>);
}

export default SWMovies;