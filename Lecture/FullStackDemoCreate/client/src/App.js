import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // state for all cartoons
  const [allCartoons, setAllCartoons] = useState([])
  //state for inputs
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("")
  const [episodes, setEpisodes] = useState(1)

  // when the component finishes loading execute useEffect
  useEffect(() => {
    axios.get("http://localhost:8000/api/cartoons")
      .then(res => {
        //! always see what the server is coming back with
        console.log(res.data)
        setAllCartoons(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  //submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title, genre, episodes)
    const newCartoon = {
      title,
      genre,
      episodes
    }
    // take the object and send it to the server -> DB
    axios.post("http://localhost:8000/api/cartoons", newCartoon)
      .then(res => {
        console.log(res.data)
        
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Cartoons</h1>
      {/* {JSON.stringify(allCartoons)} */}

      {JSON.stringify(title)} <br />
      {JSON.stringify(genre)} <br />
      {JSON.stringify(episodes)}
      {/* FORM */}
      <form onSubmit={submitHandler}>
        title: <input onChange={e => setTitle(e.target.value)} value={title} /> <br />
        genre: <input onChange={e => setGenre(e.target.value)} value={genre} /><br />
        episode: <input type="number" onChange={e => setEpisodes(e.target.value)} value={episodes} /> <br />
        <button>submit</button>
      </form>

      <hr />
      {
        allCartoons.map((eachCartoon, i) => {
          return (
            <div key={i}>
              <p >title: {eachCartoon.title}</p>
              <p>genre: {eachCartoon.genre}</p>
              <p>Episode: {eachCartoon.episodes}</p>
              <hr />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
