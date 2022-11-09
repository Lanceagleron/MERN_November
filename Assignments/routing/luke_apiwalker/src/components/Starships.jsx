import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Starships = (props) => {

    const [starship, setStarship] = useState({});
    const {starshipId} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${starshipId}`)
            .then((res) => {
                console.log(res.data);
                setStarship(res.data);
            })
            .catch(err => console.log("❌", err))
    }, [starshipId])

    return (
        <>
            {
                starship ? (
                    <>
                        <h1>{starship.name}</h1>
                        <h3>Model: <em>{starship.model}</em></h3>
                        <h3>Hyperdrive Rating: <em>{starship.hyperdrive_rating}</em></h3>
                        <h3>Manufacturer: <em>{starship.manufacturer}</em></h3>
                        <h3>Cargo capacity: <em>{starship.cargo_capacity}</em></h3>
                        
                    </>
                ) : (
                    <p>Loading...</p>
                )
            }

        </>
    )
}

export default Starships