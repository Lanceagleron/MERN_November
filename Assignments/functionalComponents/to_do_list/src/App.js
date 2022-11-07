import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import React, {useState} from 'react';
import FruitForm from './components/FruitForm';
function App() {

  const [toDoList, setToDoList] = useState([])

  const handleToDoDelete = (delIdx) => {
    const filteredToDos = toDoList.filter((pElement, idx) => {
      return idx != delIdx;
  });
  
  setToDoList(filteredToDos)
  }

  const addToDoState = (listObject) => {
    const toDoListCopy = [...toDoList];
    toDoListCopy.push(listObject);
    setToDoList(toDoListCopy)
    
  }

  return (
    <div className="App">
      <Form
      addToDoState = {addToDoState}
      toDoList = {toDoList}
      setToDoList = {setToDoList}
      />
      {
        toDoList.map((pElement,idx) => {
          return <Display handleToDoDelete = {handleToDoDelete} key={idx} toDoList = {pElement} idx = {idx}/>
        })
      }
    </div>
  );
}

export default App;
