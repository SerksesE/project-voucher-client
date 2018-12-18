import { combineReducers } from 'redux'
import coupon from './coupon'
import coupons from './coupons'

export default combineReducers({
  coupons,
  coupon
})