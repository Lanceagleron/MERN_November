import React from 'react'

const Display = (props) => {


  return (
    <fieldset>
        <legend>Display.jsx</legend>
        {
            props.people.map((eachOneElement, idx) => {
                return (
                    <p key={idx}>{eachOneElement}</p>
                )
            })
        }
    </fieldset>
  )
}

export default Display