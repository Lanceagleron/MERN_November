import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'


function App() {

  //create state for this component
  const [cartoons, setCartoons] = useState([]);

  // make the request to the server on componnent load
  useEffect(() => {
    axios.get("http://localhost:8000/api/cartoons")
      .then(res => {
        // always see what is coming back from the server / controller
        console.log(res.data);
        setCartoons(res.data)
      })
      .catch( err => {
        console.log("❌❌❌", err)
      })
  }, [])

  return (
    <div className="App">
      <h1>Cartoons</h1>
      <hr/>
      {
        cartoons.map((eachOneCartoon, i) => {
          return <div key={eachOneCartoon._id}><p>{eachOneCartoon.title}</p></div>
        })
      }

      <hr/>
    </div>
  );
}

export default App;
