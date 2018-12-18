import { FETCH_COUPONS } from '../actions/coupon'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_COUPONS:
      return action.coupons

    default:
      return state
  }
}
