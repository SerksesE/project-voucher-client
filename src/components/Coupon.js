import * as React from 'react'
import './Coupon.css'

export default function CouponActivate(props) {
  
  if (props.coupon === null) return <h1>Loading your coupon...</h1>
  
  const color = {
    backgroundColor: props.coupon.forms.location.button_color,
    borderColor: props.coupon.forms.location.button_color,
    color: props.coupon.forms.location.button_text_color
  }

  const containerStyle = {
    backgroundImage: 'url(' + props.coupon.forms.location.coupon_image + ')'
  }

  const freeStyle = {
    color: props.coupon.forms.location.free_color
  }

  const coffeeStyle = {
    color: props.coupon.forms.location.coffee_color
  }

  const courtesyStyle = {
    color: props.coupon.forms.location.courtesy_color
  }

  return (
    <div className="container" style={containerStyle}>
      <img className='logo' src={props.coupon.forms.location.logo} alt="logo" width="100px" />
      <h1 className='free' style={freeStyle}>FREE</h1>
      <h2 className='coffeetext' style={coffeeStyle}>COFFEE</h2>
      <h3 className='enjoytoday' style={courtesyStyle}>Courtesy of Enjoy Today</h3>
      <div className='button-container'>
        <button className='button' style={color} onClick={() => props.toggleDisplay()}>USE COUPON NOW</button>
      </div>
      <h3 className='limited' style={courtesyStyle}>Limited to one-time use</h3>
      <h3 className='valid' style={courtesyStyle}>Once activated, valid for 30 minutes</h3>
      <div className='toggle'>
        {props.renderBarcode()}
      </div>
    </div>
  )
}