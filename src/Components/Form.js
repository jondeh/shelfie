import React, {Component} from 'react'
import axios from 'axios'
import {Link, withRouter} from 'react-router-dom'


class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            price: 0,
            imgurl: "",
            isEdit: false
        }
    }

    componentDidMount(){
        let array = this.props.history.location.pathname.split('/')
        let id = array[array.length-1]
        console.log("id", id)
        axios.get(`/api/product/${id}`).then(res => {
            console.log("data", res.data)
                this.setState({
                    name: res.data[0].name,
                    price: res.data[0].price,
                    imgurl: res.data[0].image,
                    isEdit: true,
                    id: id
                })
            })
        }

        componentDidUpdate(prevProps){
            console.log(prevProps)
            console.log("this.props", this.props)
            if(prevProps.location.pathname !== this.props.location.pathname){
                console.log('ding')
                this.setState({
                    name: "",
                    price: 0,
                    imgurl: "",
                    isEdit: false
                })
            }
        }

    addProduct = () => {
        axios.post('/api/product', {name: this.state.name, price: this.state.price, image: this.state.imgurl}).then(res => {
            console.log("postRes", res.data)
            this.props.updateInventory()
            this.setState({name: "", price: 0, imgurl: ""})
        })
    }

    editProduct = () => {
        axios.put(`/api/product/${this.state.id}`, {name: this.state.name, price: this.state.price, image: this.state.imgurl}).then(res => {
            this.props.updateInventory()
            // this.setState({name: '', price: 0, imgurl: '', isEdit: false,})
            this.props.history.push("/")
        })
    }

   
    render(){
        console.log("state", this.state)
        console.log("props", this.props)

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
                    {
                        this.state.isEdit ? <Link to={'/'} onClick={() => this.addProduct()}><button className="add-button">SAVE</button></Link> :
                        <Link to={'/'} onClick={this.addProduct}><button className="add-button">ADD TO INVENTORY</button></Link>



                    }
{/*                     
                    
                    <Link to='/' onClick={() => this.setState({name: "", price: 0, imgurl: ""})}><button className="cancel-button">CANCEL</button></Link>
                    <Link to={'/'} onClick={this.addProduct}><button className="add-button">ADD TO INVENTORY</button></Link> */}
                </div>
            </div>
        )
    }
}

export default withRouter(Form);