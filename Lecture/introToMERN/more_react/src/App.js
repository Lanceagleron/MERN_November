import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import OtherComponent from './components/OtherComponent';

function App() {

  const person = {
    name: "Bob",
    favFood: "🍣",
    age: 31
  }
  return (
    <fieldset>
      <legend>App.js</legend>
      <h1>More react!🐶</h1>
      {JSON.stringify(person)}
      <Person p = {person}/>
      <OtherComponent alice={10}/>
    </fieldset>
  );
}

export default App;
