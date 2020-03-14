import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            price: 0,
            imgurl: "",
            currentProduct: null
        }
    }

    // componentDidMount(){
    //     axios.get(`/api/inventory/${this.props.match.params.id}`).then(res => {
    //             this.setState({
    //                 name: res.data.name,
    //                 price: res.data.price,
    //                 imgurl: res.data.image
    //             })
    //         })
    //     }

    addProduct = () => {
        axios.post('/api/product', {name: this.state.name, price: this.state.price, image: this.state.imgurl}).then(res => {
            console.log("postRes", res.data)
            this.props.updateInventory()
            this.setState({name: "", price: 0, imgurl: ""})
        })
    }

   
    render(){
        console.log("props", this.props)
        console.log("match", this.props.match)

        return(
            <div className="form">
                <img className="img-container"></img>
                <h1>Image URL:</h1><input onChange={(e) => this.setState({imgurl: e.target.value})}
                value={this.state.imgurl}></input>
                <h1>Product Name:</h1><input onChange={(e) => this.setState({name: e.target.value})}
                 value={this.state.name}></input>
                <h1>Price:</h1><input onChange={(e) => this.setState({price: e.target.value})}
                 value={this.state.price}></input>
                <div className='button-container'>
                    <Link to='/' onClick={() => this.setState({name: "", price: 0, imgurl: ""})}><button className="cancel-button">CANCEL</button></Link>
                    <Link to={'/'} onClick={this.addProduct}><button className="add-button">Save Changes</button></Link>
                </div>
            </div>
        )
    }
}

export default Form;