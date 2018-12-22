import { combineReducers } from 'redux'
import coupon from './coupon'
import coupons from './coupons'
import displayValidation from './displayValidation'
import displayBarcode from './displayBarcode'

export default combineReducers({
  coupons,
  coupon,
  displayValidation,
  displayBarcode
})