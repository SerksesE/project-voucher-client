import React, { Component } from 'react';
import './App.css';
import CouponActivateContainer from './components/CouponActivateContainer';
//import Timer from './components/Timer'
// import Popup from './components/Popup';
import { Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
          <h1 className='title'>Consumerview</h1>
   
       
        <Route exact path="/:uuid" component={CouponActivateContainer} />
        
      </div>

    );
  }
}