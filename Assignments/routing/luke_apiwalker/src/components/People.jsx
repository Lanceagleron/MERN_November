import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom';

const People = (props) => {

    const [people, setPeople] = useState({});
    const [home , setHome] = useState();
    const { peopleId } = useParams();
    const { homeId } = useParams();
    const navigate = useNavigate();
    const [ error, setError ] = useState("");

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${peopleId}`)
            .then((res) => {
                console.log(res.data);
                setPeople(res.data);
                setError("")
            })
            .catch(err => {
                console.log("❌", err)
                setError("These aren't the droids you're looking for.")
            })
    }, [peopleId])

    // axios.get(people.homeworld)
    //     .then((resource) => {
    //         // console.log(resource.data);
    //         setHome(resource.data.name);
    //     }).catch(err => console.log("❌", err))

    return (
        <>
            {
                error === "" ? (
                    <>
                        <h1>{people.name}</h1>
                        <h3>Height: <em>{people.height}</em></h3>
                        <h3>Mass: <em>{people.mass}</em></h3>
                        <h3>Hair Color: <em>{people.hair_color}</em></h3>
                        <h3>Skin Color: <em>{people.skin_color}</em></h3>
                        {/* <div>
                            <h3>Home World:</h3>
                            
                            {
                                home ? (
                                    <Link to={`/planets/`}>{home}</Link>
                                    
                                ) : (<p>loading...</p>)
                                
                            }
                            
                        </div> */}
                    </>
                )  : error ? 
                <div>
                <p> {error} </p>
                <img src="https://media.tenor.com/1VAMPydBIokAAAAC/obi-wan-kenobi-star-wars.gif" alt="" /> 
                </div>
                :
                <p>Loading... </p>
                
            }
        </>
    )
}

export default People