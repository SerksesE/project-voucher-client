import * as request from 'superagent'

const baseUrl = 'https://consumerview.herokuapp.com'

export const FETCH_COUPONS = 'FETCH_COUPONS'
export const FETCH_COUPON = 'FETCH_COUPON'
export const UPDATE_COUPON = 'UPDATE_COUPON'

const getCoupons = coupons => ({
  type: FETCH_COUPONS,
  coupons
})

const getCoupon = coupon => ({
  type: FETCH_COUPON,
  coupon
})

const updateCouponSuccess = () => ({
  type: UPDATE_COUPON
})


export const fetchCoupons = () => (dispatch, getState) => {
  if (getState().coupons) return

  request
    .get(`${baseUrl}/coupons`)
    .then(result => dispatch(getCoupons(result.body)))
    .catch(err => console.error(err))
}

export const fetchCoupon = (couponUuid) => (dispatch) => {

  request
    .get(`${baseUrl}/coupons/${couponUuid}`)
    .then(result => dispatch(getCoupon(result.body)))
    .catch(err => console.error(err))
}

export const updateCoupon = (couponUuid) => (dispatch, getState) => {

  request
    .patch(`${baseUrl}/coupons/${couponUuid}`)
    .send({ couponUuid })
    .then(_ => dispatch(updateCouponSuccess()))
    .catch(err => console.error(err))
}
