import React from 'react'

const Person = (props) => {
  return (
    <>
        {
            props.person.length < 3 ? (
                <p style={{backgroundColor : props.person.color}}>{props.person.name}</p>
            ) : (
                <p style={{backgroundColor : props.person.color}}>{props.person.name}</p>)
        }
        
    </>
  )
}

export default Person