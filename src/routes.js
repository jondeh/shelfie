import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard'
import Form from './Components/Form';
import FormEdit from './Components/FormEdit'

function Routes(){








 return (
    <Switch>
        <Route exact path='/' render={() => <Dashboard 
        inventory={this.state.inventory}
        updateInventory={this.componentDidMount}
        {...this.props}/>} />
        {/* <Route exact path='/form' render={() => <Form 
        updateInventory={this.componentDidMount}
        {...this.props}/>} />
        <Route path='/form/edit/:id' render={() => <Form 
        updateInventory={this.componentDidMount}
        {...this.props}/>} /> */}
        <Route exact path='/form' render={() => <Form 
        updateInventory={this.componentDidMount}
        {...this.props}/>} />
        <Route path='/form/edit/:id' Component={Form}/>

    </Switch>
)
}

export default Routes;