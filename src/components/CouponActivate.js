import * as React from 'react'
import ValidationContainer from './ValidationContainer';

export default function CouponActivate(props) {

  if (props.coupon === null) return <h1>Loading your coupon...</h1>

  const containerStyle = {
    backgroundImage: 'url(' + props.coupon.forms.location.coupon_image + ')'
  }

  return (
  
    <div className='container' style={containerStyle}>
      <img className='logo' src={props.coupon.forms.location.logo} alt="logo" width="100px" />
      <h1 className='free'>FREE</h1>
      <h2 className='coffeetext'>COFFEE</h2>
      <h3 className='enjoytoday'>Courtesy of Enjoy Today</h3>
      <div className='usebutton'>
        <ValidationContainer/>
      </div>
    </div>
  )
}