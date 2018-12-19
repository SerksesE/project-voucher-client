import {FETCH_COUPON, UPDATE_COUPON } from '../actions/coupon'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_COUPON:
    return action.coupon
    
    case UPDATE_COUPON:
    console.log(action.coupon)
      return [state, action.coupon]

    default:
      return state
  }
}
