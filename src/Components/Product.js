import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function Product(props){
    const {product, deleteInventory, id} = props
    return(
        <div className="product">

            <img className="product-image" alt={product.image}/>

            <div className="title-container">
            <div className="details-container">
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            </div>
            <div className="button-container">
                <button onClick={() => deleteInventory(id)}>DELETE</button>
                <Link to={`/form/edit/${id}`}><button>EDIT</button></Link>
            </div>
            </div>
        </div>
    )
}

export default Product;