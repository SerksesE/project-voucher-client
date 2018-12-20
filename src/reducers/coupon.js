import {FETCH_COUPON, UPDATE_COUPON } from '../actions/coupon'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_COUPON:
    return action.coupon
    
    case UPDATE_COUPON:
      return {...state, used_at: action.coupon.used_at}

    default:
      return state
  }
}
