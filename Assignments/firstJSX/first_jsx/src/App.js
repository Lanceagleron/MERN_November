import logo from './logo.svg';
import './App.css';
import ToDoComponents from './components/ToDoComponents';


function App() {

  
  return (
    <div className="App">
      <div><h1>Hello Dojo!</h1></div>
      <div><p>Things I need to do:</p></div>
      <ToDoComponents/>
    </div>
  );
}

export default App;
