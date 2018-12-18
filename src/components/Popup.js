import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import withMobileDialog from '@material-ui/core/withMobileDialog';
import {fetchCoupon} from '../actions/coupon'
import { connect } from 'react-redux'


class Popup extends React.Component {
  state = {
    open: false,
  };


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleBarcode = () => {
    this.setState({ open: false });
    console.log(this.props)
    this.props.fetchCoupon(this.props.match.params.id)
  };

  render() {
    const { fullScreen } = this.props;


  console.log(this.state)


    return (
      <div>
        <Button onClick={this.handleClickOpen}>Use now?</Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="popup-title"
        >
          <DialogTitle id="popup-title">{"Activate coupon?!"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to use your coupon now ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleBarcode} color="primary">
              Yes, Use now
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Maybe later
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Popup.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  barcode: state.coupon
})

// export default withMobileDialog()(Popup);

export default connect(mapStateToProps, {fetchCoupon})(Popup)