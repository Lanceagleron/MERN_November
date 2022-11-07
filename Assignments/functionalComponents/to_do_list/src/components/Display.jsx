import React, {useState} from 'react'

const Display = (props) => {
    const [isComplete, setIsComplete] = useState(false)

    function handleComplete(e) {
        e.preventDefault();
        props.handleToDoDelete(props.idx)
    }

    

  return (
    <>
    <fieldset>
    <form onSubmit={handleComplete}>
        <input type="checkbox" onChange={e=>
        setIsComplete(e.target.checked)} />
        {
            isComplete == true ? (
                <del>{props.idx + 1}. {props.toDoList}</del> 
            ) : (<span>{props.idx + 1}. {props.toDoList}</span>)
                
        }
        <br />
        <button>Delete</button>
    </form>
    </fieldset>
    </>
  )
}

export default Display