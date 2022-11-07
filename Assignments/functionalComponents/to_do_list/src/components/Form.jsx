import React, {useState} from 'react'


const Form = (props) => {
    
    const [newToDo, setNewToDo] = useState("")

    const addToDo = (e) => {
        e.preventDefault()

        const newList = (
            [ newToDo ]
        )

        props.addToDoState(newList)

        setNewToDo("")
    }

  return (
    <>
    <form onSubmit={addToDo}>
        <input onChange={(e) =>
        {setNewToDo(e.target.value)}} />
        <button>Add</button>
    </form>
    </>
  )
}

export default Form