import React, {Component} from 'react';
import './CSS/App.css';
import './CSS/Header.css';
import './CSS/Form.css';
import './CSS/Dashboard.css';
import './CSS/Product.css';
import Form from './Components/Form'
import FormEdit from './Components/FormEdit'
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import axios from 'axios';
import {Switch, Route, HashRouter} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import Routes from '../src/routes'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/inventory').then(res => {
      console.log("res", res.data)
      this.setState({inventory: res.data})
    })
  }

  render(){
  return (
    <div className="App">
      <Header />
      <div className="body">
      <Switch>
        <Route exact path='/' render={() => <Dashboard 
        inventory={this.state.inventory}
        updateInventory={this.componentDidMount}
        {...this.props}/>} />
        <Route exact path='/form' render={() => <Form 
        updateInventory={this.componentDidMount}
        {...this.props}/>} />
        <Route path='/form/edit/:id' render={() => <Form 
        updateInventory={this.componentDidMount}
        {...this.props}/>} />

    </Switch>
      </div>
    </div>
  );
  }
}

export default withRouter(App);
