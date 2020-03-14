import React from 'react'
import Product from './Product'
import axios from 'axios'

function Dashboard(props){
    const {inventory, selectProduct} = props

    function deleteInventory(id){
        axios.delete(`/api/product/${id}`).then(res => {
            props.updateInventory()
        }).catch(err => console.log(err))
    }


    return(
        <div className="dashboard">
            {inventory.map((product, i) => <Product key={i} product={product} deleteInventory={deleteInventory} id={product.id} selectProduct={selectProduct}/>)}
        </div>
    )
}

export default Dashboard;