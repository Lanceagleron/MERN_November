import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = (props) => {
    //grab the url variable :id
    const {id} = useParams()
    const [thisProduct, setThisProduct] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
        .then(res => {
            console.log(res.data)
            setThisProduct(res.data)
        })
        .catch(err => console.log(err))
    }, [id])

  return (
    <div>
        {
            thisProduct ? (
                <div>
                    <h3>{thisProduct.title}</h3>
                    <p>Price: $ {thisProduct.price}</p>
                    <p>Description: {thisProduct.description}</p>
                </div>
            ) : (
                "loading..."
            )
        }
    </div>
  )
}

export default Product