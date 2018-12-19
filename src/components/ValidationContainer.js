// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import Validation from './Validation';
// import { displayBarcode } from '../actions/display'
// import { updateCoupon } from '../actions/coupon'

// class ValidationContainer extends Component {
//   toggleDisplay = () => {
//     console.log(this.props.match, 'togglebutton')
//     this.props.displayBarcode()
//     // this.props.updateCoupon(this.props.match.params.uuid)
//   }

//   renderBarcode = () => {
//     if (this.props.display === true) { 
//       return (
//         <div>
//           <img src={this.props.coupon.forms.barcode} alt='Barcode' width='150px' />
//         </div>
//       )
      
//     }
//     return (
//       <div>
//         <img src={this.props.coupon.forms.location.coffee_image} alt='Coffee cup' width='150px' />
//       </div>
//     )
//   }

//   render() {
//     console.log(this.props.coupon.forms.location.button_color)
//     return (
//       <Validation toggleDisplay={this.toggleDisplay} renderBarcode={this.renderBarcode} coupon={this.props.coupon}/>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     display: state.displayBarcode,
//     coupon: state.coupon
//   }
// }

// export default connect(mapStateToProps, { displayBarcode, updateCoupon })(ValidationContainer)