import { combineReducers } from 'redux'
import coupon from './coupon'
import coupons from './coupons'
import displayBarcode from './display'

export default combineReducers({
  coupons,
  coupon,
  displayBarcode
})