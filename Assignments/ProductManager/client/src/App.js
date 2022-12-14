import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {Link, Route, Routes, Navigate} from 'react-router-dom';
import Product from './components/Product';

function App() {
  const [allProducts, setAllProducts] = useState([])
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState()
  const [description, setDescription] = useState("")

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        //! always see what the server is coming back with
        console.log(res.data)
        setAllProducts(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      description
    }
    // take the object and send it to the server -> DB
    axios.post("http://localhost:8000/api/products", newProduct)
      .then(res => {
        console.log(res.data)
        
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <h1>Product Manager</h1>
      <form onSubmit={submitHandler}>
        <label>Title: </label> <input type="text" onChange={e => setTitle(e.target.value)} value={title} /> <br/>
        <label>Price: </label> <input type="number" onChange={e => setPrice(e.target.value)} value={price} /> <br/>
        <label>Description: </label> <textarea cols="30" rows="10" onChange={e => setDescription(e.target.value)} value={description}></textarea> <br/>
        <button>Submit</button>
      </form>
      <hr />
      <h1>All our Products</h1>
      {
        allProducts.map((eachProduct, i) => {
          return (
            <div key={i}>
              <Link to={`/product/${eachProduct._id}`}>{eachProduct.title}</Link>
            </div>
          )
        })
      }
      <hr />
      <Routes>
        <Route path='/'></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
      </Routes>
    </div>
  );
}

export default App;