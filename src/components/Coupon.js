import * as React from 'react'
// import Popup from './Popup';
import ValidationContainer from './ValidationContainer';
import './Coupon.css'

export default function CouponActivate(props) {
  if (props.coupon === null) return <h1>Loading your coupon...</h1>

  console.log(props.coupon)
  console.log(props.coupon.forms)
  console.log(props.coupon.forms.location)
  console.log(props.coupon.forms.location.button_color)
  
  const color = {
    backgroundColor: props.coupon && props.coupon.forms.location.button_color,
    borderColor: props.coupon && props.coupon.forms.location.button_color
  }

  return (
    <div className="container">
      <div>
        <img className='couponSer' src={props.coupon.forms.location.coupon_image} alt="Coupon" width="300px" />

        <div className='text'>
          <h1 className='free-text'>FREE</h1>
          <h1 className='coffee-text'>COFFEE</h1>
          <h1 className='enjoy-text'>Courtesy of Enjoy Today</h1>
        </div>

        <div>
          <div className='button-container'>
            <button className='button' style={color} onClick={() => props.toggleDisplay()}>Use</button>
          </div>

          <div className='toggle'>
            {props.renderBarcode()}
          </div>
        </div>
      </div>
    </div>
  )
}