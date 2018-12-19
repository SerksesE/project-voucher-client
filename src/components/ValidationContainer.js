import React, { Component } from 'react'
import { connect } from 'react-redux'
import Validation from './Validation';
import { displayBarcode } from '../actions/display'

class ValidationContainer extends Component {
  toggleDisplay = () => {
    this.props.displayBarcode()
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
    return (
      <Validation toggleDisplay={this.toggleDisplay} renderBarcode={this.renderBarcode} />
    )
  }
}

const mapStateToProps = state => {
  return {
    display: state.displayBarcode,
    coupon: state.coupon
  }
}

export default connect(mapStateToProps, { displayBarcode })(ValidationContainer)