import { userConstants } from "../Constants";

export function forgotpass(state = {}, action) {
  switch (action.type) {
    case userConstants.FORGOTPASS_REQUEST:
      return { sending: true };
    case userConstants.FORGOTPASS_SUCCESS:
      return {};
    case userConstants.FORGOTPASS_FAILURE:
      return {};
    default:
      return state
  }
}