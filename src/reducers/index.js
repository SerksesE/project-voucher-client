import { combineReducers } from 'redux'
import coupon from './coupon'
import coupons from './coupons'
import display from './display'

export default combineReducers({
  coupons,
  coupon,
  display
})