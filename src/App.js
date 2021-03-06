import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Edit from './components/Edit/Edit';
import SavedStories from './components/Dashboard/SavedStories/SavedStories';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/edit' component={Edit} />
        <Route path='/save' component={SavedStories} />
      </Switch>
    );
  }
}

export default App;
