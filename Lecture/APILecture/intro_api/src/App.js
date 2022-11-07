import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  const [superHeroes, setSuperHeroes] = useState([])

  //useEffect ============================================

  useEffect(() => {
    
    axiosSuperHeroes();
  }, [])

  // Vanilla JS fetch
  const fetchSuperHeroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => {
        // console.log(res)
        return res.json()
      })
      .then((res) => {
        console.log(res)
        setSuperHeroes(res)
      }) 
      .catch( (serverErrorObject) => {
        console.log("❌ ERROR", serverErrorObject)
        
      })
  }

  // Axios get request
  const axiosSuperHeroes = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
    .then((res) => {
      console.log(res.data)
      // ! axios wraps everything (from the response) inside its own obj .data
      setSuperHeroes(res.data)
    })
    .catch(err => console.log(err))
  }
  

  return (
    <div className='container'>
    <div className="App">
      <h1>SuperHeroes API 🦸🦹‍♀️</h1>
      

      <button onClick={fetchSuperHeroes}>fetch superheroes</button>|||
      <button onClick={axiosSuperHeroes}>axios superheroes</button>
      <hr/>
      {/* {JSON.stringify(superHeroes)} */}

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Hero name</th>
            <th>Full name</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            superHeroes.map((hero, idx) => {
              return (
                <tr key = {hero.id}>
                  <th><img src={hero.images.sm} alt={hero.name} width="80px"></img></th>
                  <th>{hero.name}</th>
                  <th>{hero.biography.fullName}</th>
                  <th>{hero.biography.publisher}</th>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default App;
