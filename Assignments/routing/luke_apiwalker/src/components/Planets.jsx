import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Planets = (props) => {

    const [planet, setPlanet] = useState({});
    const { planetId } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${planetId}`)
            .then((res) => {
                console.log(res.data);
                setPlanet(res.data);
            })
            .catch(err => console.log("❌", err))
    }, [planetId])


    return (
        <>
            {
                planet ? (
                    <>
                        <h1>{planet.name}</h1>
                        <h3>Climate: <em>{planet.climate}</em></h3>
                        <h3>Terrain: <em>{planet.terrain}</em></h3>
                        <h3>Surface Water: <em>{planet.surface_water}</em></h3>
                        <h3>Population: <em>{planet.population}</em></h3>
                    </>
                ) : (
                    <p>Loading...</p>
                )
            }

        </>
    )
}

export default Planets