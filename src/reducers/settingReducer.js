const initState = [];

export const actionTypes = {
  SELECTED_NATIONALITY: 'SELECTED_NATIONALITY',
};

const settingReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_NATIONALITY:
      return payload;
    default:
      return state;
  }
};

export default settingReducer;