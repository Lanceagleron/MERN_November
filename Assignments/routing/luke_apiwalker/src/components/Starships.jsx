import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios, { AxiosError } from 'axios';
import NotFound from './NotFound';

const Starships = (props) => {

    const [starship, setStarship] = useState({});
    const {starshipId} = useParams();
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${starshipId}`)
            .then((res) => {
                console.log(res.data);
                setStarship(res.data);
                setError("")
            })
            .catch(err => {
                console.log("❌", err)
                setError("These aren't the droids you're looking for.")
            })}, [starshipId])

    return (
        <>
            {
                error === "" ? (
                    <>
                        {/* {JSON.stringify(error)} */}
                        <h1>{starship.name}</h1>
                        <h3>Model: <em>{starship.model}</em></h3>
                        <h3>Hyperdrive Rating: <em>{starship.hyperdrive_rating}</em></h3>
                        <h3>Manufacturer: <em>{starship.manufacturer}</em></h3>
                        <h3>Cargo capacity: <em>{starship.cargo_capacity}</em></h3>
                    </>
                ) : error ? 
                <div>
                <p>{error}</p>
                <img src="https://media.tenor.com/1VAMPydBIokAAAAC/obi-wan-kenobi-star-wars.gif" alt="" />
                </div>
                : 
                <p>Loading...</p>
                
            }
        </>
    )
}

export default Starships