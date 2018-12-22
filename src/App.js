import React, { Component } from 'react';
import CouponActivateContainer from './components/CouponActivateContainer';
import { Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className='topbar'>
        <Route exact path="/:uuid" component={CouponActivateContainer} />
      </div>
    );
  }
}