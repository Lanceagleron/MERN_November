import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  const person = {
    firstName: "Jane",
    lastName:"Doe",
    age:45,
    hairColor:"⬛"
  }
  const person2 = {
    firstName: "John",
    lastName: "Smith",
    age: 88,
    hairColor: "🟫"
  }
  return (
    <div className="App">
      <Person p = {person} a = {person.age} />
      <Person p = {person2} a = {person2.age}/>
    </div>
  );
}

export default App;
