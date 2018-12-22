import { DISPLAY_BARCODE } from '../actions/displayBarcode'

export default (state = false, action = {}) => {
  switch (action.type) {
    case DISPLAY_BARCODE:
      return !state
      default:
          return state
  }
}