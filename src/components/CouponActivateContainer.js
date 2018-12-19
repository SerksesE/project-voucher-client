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
    console.log(this.props.match.params.uuid)
    this.props.displayBarcode()
    this.props.updateCoupon(this.props.match.params.uuid)
  }

  renderBarcode = () => {
    if (this.props.display === true) {
      return (
        <div>
          <img src={this.props.coupon.forms.barcode} alt='Barcode' width='150px' />
        </div>
      )
    }
    return (
      <div>
        <img src={this.props.coupon.forms.location.coffee_image} alt='Coffee cup' width='150px' />
      </div>
    )
  }

  render() {
    return (<Coupon
      updateCoupon={this.updateCoupon}
      coupon={this.props.coupon}
      toggleDisplay={this.toggleDisplay}
      renderBarcode={this.renderBarcode}
    />)
  }
}

const mapStateToProps = state => ({
  coupon: state.coupon
})

export default connect(mapStateToProps, { fetchCoupon, updateCoupon, displayBarcode })(CouponActivateContainer)