import React, { Component } from 'react'
import { connect } from 'react-redux'
import Validation from './Validation';
import { displayBarcode } from '../actions/display'

class ValidationContainer extends Component {
  toggleDisplay = () => {
    this.props.displayBarcode()
  }

  renderBarcode = () => {
    if(this.props && this.props.display === true){
      return (
      <div>
        {/* <h1>Are you sure you want to use your barcode?</h1>
        <button>Yes</button>
        <button onClick={() => console.log('No')}>No</button> */}
        <img src={this.props.coupon.forms.barcode} alt='Barcode' width='150px'/>
      </div>
      )}
  }

  render() {
    return (
      <Validation toggleDisplay={this.toggleDisplay} renderBarcode={this.renderBarcode}/>
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