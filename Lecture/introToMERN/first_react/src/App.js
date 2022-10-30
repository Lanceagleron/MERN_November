import logo from './logo.svg';
import './App.css';
//import the other Component
import SomeClassComponent from './components/SomeClassComponent';

function App() {
  const message = "hello from the app.js function"
  const animals = ["tiger", "cat", "wolf", "dog"]
  const person = {
    name: "lance",
    age: 28,
    favFood: "🍤"
  }

  console.log("hello react!")


  return (
    <fieldset>
      <legend>app.js</legend>
    <div>
      <div className="App">
        <h1>hello ninjas🎈</h1>
      </div>
      <div>
        <p>
          {message}
          <br></br>
          {JSON.stringify(person)}
        </p>
      </div>
      <hr/>
      <div>
          {
            animals.map((element, idx) => {
              return <li key={idx}>{element}</li>
            })
          }
          <SomeClassComponent x={3} name={"lance"} animal={animals}/>
          <SomeClassComponent person={person} message={message}/>
      </div>
    </div>
    </fieldset>
  );
}

export default App;
