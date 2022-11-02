import React, {useState} from 'react'



const FormComponent = () => {
    const [input, setInput] = useState("");
    const [animals, setAnimals] = useState(["🦁", "🐶", "🦛", "🐗"])

    const submitHandler = (e) => {
    e.preventDefault();
    console.log(input)

    const animalsCopy = [...animals]
    animalsCopy.push(input)
    setAnimals(animalsCopy)

    // setAnimals([...animals, input]);
}
  return (
    <fieldset><legend>FormComponent</legend>
    <p>Forms!</p>
    <p>{JSON.stringify(animals)}</p>
    <p>state var "input": {JSON.stringify(input)}</p>
    <form onSubmit={submitHandler}>
        <input onChange={(e) => setInput(e.target.value)} />
        <button>submit</button>
    </form>
    </fieldset>
  )
}

export default FormComponent