import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from 'axios';

function App() {
  
  const [pokemon, setPokemon] = useState([])

  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then((res) => {
      console.log(res.data)
      setPokemon(res.data.results)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='container'>
    <div className="App">
      <h1>Pokemon Api</h1>
      <button onClick={axiosPokemon}><h2>Fetch Pokemon</h2></button>
      <ul>
        {/* {JSON.stringify(pokemon)} */}
        {
          pokemon.map((mon, idx) => {
            return (
            <li key={idx}>{mon.name}</li>
            )
        })
        }
      </ul>
    </div>
    </div>
  );
}

export default App;
