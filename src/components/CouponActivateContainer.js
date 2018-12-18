import React from 'react'
import { connect } from 'react-redux'
import CouponActivate from './CouponActivate'
import { fetchCoupon, updateCoupon } from '../actions/coupon'

class CouponActivateContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCoupon(String(this.props.match.params.uuid))
  }

  // //EDIT to update the coupon instead of deleting
  // updateCoupon = () => {
  //   this.props.updateCoupon(this.props.coupon.id)
  //   // this.props.history.push('/')
  // }

  render() {
    return (<CouponActivate
      updateCoupon={this.updateCoupon}
      coupon={this.props.coupon}
    />)
  }
}

const mapStateToProps = state => ({
  coupon: state.coupon
})

export default connect(mapStateToProps, { fetchCoupon, updateCoupon })(CouponActivateContainer)