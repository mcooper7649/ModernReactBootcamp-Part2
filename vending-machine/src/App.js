import { Component } from 'react';
import './App.css';
import VendingMachine from './VendingMachine';
import { Switch, NavLink, Link, Route } from 'react-router-dom';

import Pepsi from './Pepsi';
import DietPepsi from './DietPepsi';
import Water from './Water';
import MountainDew from './MountainDew'

class App extends Component {
  render(){
  return (
      <div className='App' >
      
      <Switch>
        <Route exact path='/' render={()=> <VendingMachine />} />
      </Switch>
      <Switch>
        <Route exact path='/pepsi' render={()=> <Pepsi />}  />
      </Switch>
      <Switch>
        <Route exact path='/mountaindew' render={()=> <MountainDew />}  />
      </Switch>
      <Switch>
        <Route exact path='/dietpepsi' render={()=> <DietPepsi/>}  />
      </Switch>
      <Switch>
        <Route exact path='/water' render={()=> <Water />}  />
      </Switch>
      </div>
    
  )
  }
}

export default App;
