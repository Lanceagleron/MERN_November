import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Hero = () => {

    const [hero, setHero] = useState(null);
    const { varId } = useParams();

    useEffect(() => {
        axios.get(`https://akabab.github.io/superhero-api/api/id/${varId}.json`)
            .then((res) => {
                console.log(res.data);
                setHero(res.data);
            })
            .catch(err => console.log("❌", err))
    }, [varId])

    return (
        <>
            <div>Hero Id is {varId}</div>
            {
                hero ? (
                    <div>
                        {/* {JSON.stringify(hero)} */}
                        <h2>{hero.name}</h2>
                        <img src={hero.images.md} alt={hero.name} />
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }

        </>
    )
}

export default Hero