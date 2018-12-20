import React from 'react'
import { connect } from 'react-redux'
import Coupon from './Coupon'
import { fetchCoupon, updateCoupon } from '../actions/coupon'
import { displayBarcode } from '../actions/display'

class CouponActivateContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCoupon(String(this.props.match.params.uuid))
  }

  toggleDisplay = () => {
    this.props.displayBarcode()
    this.props.updateCoupon(this.props.match.params.uuid)
  }

  toggleButton = () => {
    const colorTrue = {
      backgroundColor: '#F69180',
      borderColor: '#F69180',
      color: this.props.coupon.forms.location.button_text_color,
    }
    const colorFalse = {
      backgroundColor: this.props.coupon.forms.location.button_color,
      borderColor: this.props.coupon.forms.location.button_color,
      color: this.props.coupon.forms.location.button_text_color
    }

    if (this.props.display === true) {
      return (
        <div className='button-container'>
          <button className='button' style={colorTrue}>COUPON IN USE</button>
        </div>
      )
    }
    return (
      <div className='button-container'>
        <button className='button' style={colorFalse} onClick={() => this.toggleDisplay()}>USE COUPON NOW</button>
      </div>
    )
  }

  renderBarcode = () => {
    if (this.props.display === true) {
      return (
        <div>
          <img className='barcode' src={this.props.coupon.forms.barcode} alt='Barcode' width='167px' />
        </div>
      )
    }
    return (
      <div>
        <img className='cup' src={this.props.coupon.forms.location.coffee_image} alt='Coffee cup' width='131px' />
      </div>
    )
  }

  render() {
    console.log(this.props.display)
    return (<Coupon
      updateCoupon={this.updateCoupon}
      coupon={this.props.coupon}
      toggleDisplay={this.toggleDisplay}
      renderBarcode={this.renderBarcode}
      toggleButton={this.toggleButton}
    />)
  }
}

const mapStateToProps = state => ({
  coupon: state.coupon,
  display: state.display
})

export default connect(mapStateToProps, { fetchCoupon, updateCoupon, displayBarcode })(CouponActivateContainer)