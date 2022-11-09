import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';



function App() {
  return (
    <>
    <div className="App">
      <Form/>

    </div>
    <hr/>
    <Routes>
      <Route path='/people/:peopleId' element={<People/>}/>
      <Route path='/planets/:planetId' element={<Planets/>}/>
      <Route path='/starships/:starshipId' element={<Starships/>}/>
      
    </Routes>
    </>
  );
}

export default App;
