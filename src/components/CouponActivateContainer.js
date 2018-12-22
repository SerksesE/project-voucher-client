import React from 'react'
import { connect } from 'react-redux'
import Coupon from './Coupon'
import { fetchCoupon, updateCoupon } from '../actions/coupon'
import { barcodeDisplay } from '../actions/displayBarcode'
import { validationDisplay } from '../actions/displayValidation'

class CouponActivateContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCoupon(String(this.props.match.params.uuid))
  }

  toggleDisplay = () => {
    this.props.barcodeDisplay()
  }

  toggleValidation = () => {
    this.props.validationDisplay()
    this.props.barcodeDisplay()
    this.props.updateCoupon(this.props.match.params.uuid)
  }

  renderValidation = () => {
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
          <button style={colorFalse} onClick={() => this.toggleValidation()} className='button-validation'>USE NOW</button>
          <button style={colorFalse} onClick={() => this.toggleDisplay()} className='button-validation'>LATER</button>
        </div>
      )
    }
    if (this.props.validation === true || this.props.coupon.used_at !== null) {
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
    if (this.props.validation === true || this.props.coupon.used_at !== null) {
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
    return (<Coupon
      coupon={this.props.coupon}
      toggleDisplay={this.toggleDisplay}
      renderBarcode={this.renderBarcode}
      renderValidation={this.renderValidation}
    />)
  }
}

const mapStateToProps = state => ({
  coupon: state.coupon,
  display: state.displayBarcode,
  validation: state.displayValidation
})

export default connect(mapStateToProps, { fetchCoupon, updateCoupon, barcodeDisplay, validationDisplay })(CouponActivateContainer)