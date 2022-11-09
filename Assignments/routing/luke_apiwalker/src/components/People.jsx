import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const People = (props) => {

    const [people, setPeople] = useState({});
    const [home , setHome] = useState();
    const { peopleId } = useParams();
    const { homeId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${peopleId}`)
            .then((res) => {
                console.log(res.data);
                setPeople(res.data);
            })
            .catch(err => console.log("❌", err))
    }, [peopleId])

    // axios.get(people.homeworld)
    //     .then((res) => {
    //         // console.log(res.data);
    //         setHome(res.data.name);
    //     })

    return (
        <>
            {
                people ? (
                    <>
                        <h1>{people.name}</h1>
                        <h3>Height: <em>{people.height}</em></h3>
                        <h3>Mass: <em>{people.mass}</em></h3>
                        <h3>Hair Color: <em>{people.hair_color}</em></h3>
                        <h3>Skin Color: <em>{people.skin_color}</em></h3>
                        <div>
                            {/* <h3>Home World:</h3>
                            {
                                home ? (
                                    <Link>{home}</Link>
                                ) : (<p> loading</p>)
                                
                            }
                             */}
                        </div>
                    </>
                ) : (
                    <p>Loading... </p>
                )
            }
        </>
    )
}

export default People