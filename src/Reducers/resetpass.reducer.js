import { userConstants } from "../Constants";

export function resetpass(state = {}, action) {
  switch (action.type) {
    case userConstants.RESETPASS_REQUEST:
      return { sending: true };
    case userConstants.RESETPASS_SUCCESS:
      return {};
    case userConstants.RESETPASS_FAILURE:
      return {};
    default:
      return state
  }
}