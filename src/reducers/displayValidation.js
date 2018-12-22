import { DISPLAY_VALIDATION } from '../actions/displayValidation'

export default (state = false, action = {}) => {
  switch (action.type) {
    case DISPLAY_VALIDATION:
      return !state
      default:
          return state
  }
}