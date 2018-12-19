import { DISPLAY_BARCODE } from '../actions/display'

export default (state = false, action = {}) => {
  console.log('Reducer')
  switch (action.type) {
    case DISPLAY_BARCODE:
      return !state
      default:
          return state
  }
}