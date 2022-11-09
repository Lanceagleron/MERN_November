import logo from './logo.svg';
import './App.css';
import Other from './components/Other'
import Main from './components/Main';
import { Routes, Route, Link } from 'react-router-dom'
import Errorpage from './components/Errorpage';
import Hero from './components/Hero';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      {/* <a href='/'>a tag home</a> | */}
      <Link to={"/"}>Link home</Link> |
      <Link to={"/other"}>other</Link> |
      <Link to={"/form"}>FORM</Link>
      
      <hr />
      
      {/* theater state */}
      <fieldset>
        <legend>Route components</legend>
        <Routes>

          <Route path='/form' element={<Form/>}/>

          <Route path='/hero/:varId' element={<Hero/>} />

          <Route path='/other' element={
            <>
              <Main />
              <Other />
            </>} />
            <Route path='/' element={<Main/>}/>

            {/* wildcard */}
            <Route path='*' element={<Errorpage/>}/>

        </Routes>
      </fieldset>
    </div>
  );
}

export default App;
