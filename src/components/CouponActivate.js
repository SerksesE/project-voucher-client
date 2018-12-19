import * as React from 'react'
// import Popup from './Popup';
import ValidationContainer from './ValidationContainer';

export default function CouponActivate(props) {
  // console.log(props.coupon + 'props')
  if (props.coupon === null) return <h1>Loading your coupon...</h1>

  return (<div>

    {/* <h1>{props.coupon.forms.location.name}</h1> */}
    {/* <button onClick={() => props.updateCoupon()} >Activate!</button> */}
    {/* <img src={props.coupon.forms.barcode} alt="Barcode" width="200px"/> */}
    <div>
      <img className='coupon' src={props.coupon.forms.location.coupon_image} alt="Coupon" width="300px" />
    </div>
    <div>
      <img className='coffee' src={props.coupon.forms.location.coffee_image} alt="coffee" width="100px" />
    </div>

    <div className='free'>
      <p>Free</p>
    </div>

  </div>
  )
}