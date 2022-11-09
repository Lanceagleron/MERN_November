import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {

    const [heroNum, setHeroNum] = useState(1)
    //in order to use the programmatic way
    //we need to invoke useNavigate
    const navigate = useNavigate();
    // console.log(navigate)

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(heroNum)
        navigate("/hero/" + heroNum)

    }

    const goBack = () => {
        navigate(-1)
    }

  return (
    <>
    <form onSubmit={submitHandler}>
        <label>enter a number: </label>
        <input type="number" onChange={e => setHeroNum(e.target.value)}/>
        <button>Submit</button>
    </form>
    <div>
        <button onClick={goBack}>Go Back</button>
    </div>
    </>
  )
}

export default Form