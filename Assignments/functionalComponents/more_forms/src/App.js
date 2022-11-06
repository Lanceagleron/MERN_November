import logo from './logo.svg';
import './App.css';
import Forms from './components/Forms';
import React, {useState} from 'react';

function App() {
  const [user, setUser] = useState([
    {}
  ])
  const addToUserState = (userObject) => {
    const userCopy = [...user];
    userCopy.push(userObject);
    setUser(userCopy)
  }
  return (
    <div className="App">
      <Forms addToUserState={addToUserState}
      user = {user}
      setUser = {setUser}/>
      <hr/>
    </div>
  );
}

export default App;
