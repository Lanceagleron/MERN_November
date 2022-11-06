import React, {useState} from 'react'
import Display from './Display'

const Form = (props) => {

    // const [people, setPeople] = useState(["john", "jenny", "bob"])
    const [name, setName] = useState("")
    const [color, setColor] = useState("")


    //form submission
    const createUser = (e) =>{
        // always prevent the default submit behavior of the browser
        e.preventDefault()
        // console.log("created")
        
        const newPerson = {
            name,
            color
        }
        

        //setting state
        // setPeople([...people, name])
        props.addToPeopleState(newPerson)
        setName("")props
        setColor("")
    }

    //custom function
    const colorHandler = (value) => {
        setColor(value)
    }

  return (
    <fieldset>
        <legend>Form.jsx</legend>
        form state name: {JSON.stringify(name)} <br/>
        form state color: {JSON.stringify(color)}
        <form onSubmit={createUser}>
            name: <input onChange={(e) => 
                {setName(e.target.value)}} value={name} /> <br />
            color: <input onChange={(e) => 
                {setColor(e.target.value)}} value={color} /> <br />
            <button>Submit</button>
        </form>

        <hr />
        {/* <Display people={people}/> */}
    </fieldset>
  )
}

export default Form