import { actionTypes } from "../reducers/settingReducer";

export const selectedNationality = data => dispatch => {
  dispatch({ type: actionTypes.SELECTED_NATIONALITY, payload: data });
};