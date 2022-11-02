import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import OtherComponent from './components/OtherComponent';
import FunctionalComponent from './components/FunctionalComponent';
import FormComponent from './components/FormComponent';

function App() {

  const person = {
    name: "Bob",
    favFood: "🍣",
    age: 31
  }

  const animals = ["🦁", "🐶", "🦛", "🐗"]

  return (
    <fieldset>
      <legend>App.js</legend>
      <h1>More react!🐶</h1>
      {JSON.stringify(person)}
      <Person p = {person}/>
      <OtherComponent alice={10}/>
      <hr/>
      <FunctionalComponent num = {17} personFromProps = {person} animals = {animals}/>
      <FormComponent animals = {animals}/>
    </fieldset>
  );
}

export default App;
