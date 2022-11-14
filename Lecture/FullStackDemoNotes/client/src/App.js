import {Link} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Notes 📝</h1>
      <Link to={"/notes"}>HOME</Link>
      <Link to={"/create"}></Link>
    </div>
  );
}

export default App;
