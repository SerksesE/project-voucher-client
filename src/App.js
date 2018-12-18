import React, { Component } from 'react';
import './App.css';
import CouponActivateContainer from './components/CouponActivateContainer';
//import Timer from './components/Timer'
// import Popup from './components/Popup';
import { Route } from 'react-router-dom'

export default class App extends Component {


  // import Test from './components/test';


  // class App extends Component {
  //   render() {
  //     return (
  //       <div className="App">
  //         <CouponActivateContainer />
  //       </div>

  //     )}

  render() {
    return (
      <div>
        <div className="timer">
        <h1>Hello</h1>
          {/* <Timer /> */}
        </div>
        <Route exact path="/:uuid" component={CouponActivateContainer} />
      </div>

    );
  }
}