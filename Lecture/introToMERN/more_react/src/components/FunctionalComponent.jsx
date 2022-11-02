//rafce     //add {useState}
import React, {useState} from 'react'

const FunctionalComponent = (props) => {

    //Create State for this  component
    //Create state in functional component
    //   state
    //     |  change state
    //     v        v             default state
    const [num , setNum] = useState(props.num)
    const [person , setPerson] = useState(props.personFromProps)
    

    const increaseNum = () => {
        // console.log("Clicked!")
        // let newNum = num + 1
        // setNum(newNum)
        //CHANGE STATE
        setNum(num + 1)
    }

    console.log(props);
    // you can destructure "props"
    const {personFromProps} = props
    const {name} = props.personFromProps;

  return (
    <fieldset>
    <legend>FunctionalComponent.jsx</legend>
    <p>{props.personFromProps.name}, {name} </p>
    <p onClick={() => increaseNum()}>{num}</p>
    <p>{person.favFood}</p>
    <p>All the animals!</p>
    {
        props.animals.map((eachAnimals,idx) => {
            return <li key={idx}>{eachAnimals}</li>
        })
    }
    </fieldset> 
    
  )
}

export default FunctionalComponent