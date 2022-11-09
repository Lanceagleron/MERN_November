import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Form = (props) => {
    const [Id, setId] = useState(1)
    const [go, setGo] = useState("/people/")
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(Id)
        navigate(go + Id)

    }


  return (
    <>
    <form onSubmit={submitHandler}>
        <label>Search for: </label>
        <select onChange={e => setGo(e.target.value)}>
            <option value="/people/">people</option>
            <option value="/planets/">planets</option>
            <option value="/starships/">starships</option>
        </select>
        <label >ID: </label>
        <input type="number" onChange={e => setId(e.target.value)}/>
        <button>Search</button>
    </form>
    </>
  )
}

export default Form