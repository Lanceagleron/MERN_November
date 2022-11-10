import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Planets = (props) => {

    const [planet, setPlanet] = useState({});
    const { planetId } = useParams();
    const [ error, setError ] = useState("");

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${planetId}`)
            .then((res) => {
                console.log(res.data);
                setPlanet(res.data);
                setError("")
            })
            .catch(err => {
                console.log("❌", err)
                setError("These aren't the droids you're looking for.")
            })
    }, [planetId])


    return (
        <>
            {
                error === "" ? (
                    <>
                        <h1>{planet.name}</h1>
                        <h3>Climate: <em>{planet.climate}</em></h3>
                        <h3>Terrain: <em>{planet.terrain}</em></h3>
                        <h3>Surface Water: <em>{planet.surface_water}</em></h3>
                        <h3>Population: <em>{planet.population}</em></h3>
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

export default Planets