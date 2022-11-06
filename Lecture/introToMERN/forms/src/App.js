import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, {useState} from 'react';
import Display from './components/Display'
import Person from './components/Person';

function App() {
  const [people, setPeople] = useState([
    {name:"john", color:"red" },
     {name:"jenny", color:"blue" },
      {name:"bob", color:"yellow" }
    ])

  //add to state
  const addToPeopleState = (personObject) => {
    
    // change state here
    // 1. make a shallow copy of state
    //spread operator
    const peopleCopy = [...people];
    // 2. change the copy
    peopleCopy.push(personObject);
    // 3. change / overwrite state
    setPeople(peopleCopy)

    //alternate way
    //setPeople([...people, name])
  }

  return (
    <div className="App">
      <h1>Forms</h1>
      state: {JSON.stringify(people)}
      <Form 
      addToPeopleState={addToPeopleState}
      people = {people}
      setPeople = {setPeople}
      />
      <hr/>
      {/* <Display people={people}/> */}
      {
        people.map( (pElement, idx) => {
          return <Person key={idx} person = {pElement} idx={idx}/>
        })
      }
      {/* <Person/> */}
    </div>
  );
}

export default App;
