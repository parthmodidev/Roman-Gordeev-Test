const initState = {};

export const actionTypes = {
  GET_USERS: 'GET_USERS',
  ATTACH_USERS_DATA: 'ATTACH_USERS_DATA',
  NEXT_BATCH_DATA: 'NEXT_BATCH_DATA',
};

const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_USERS:
      return { ...state, user: payload };
    case actionTypes.ATTACH_USERS_DATA:
      const { user: { results: oldResults = [] } = {}, nextBatchData: { results = [], info = {} } = {} } = state;
      return { ...state, user: { ...state.user, results: [ ...oldResults, ...results ], info: { ...info } } };
    case actionTypes.NEXT_BATCH_DATA:
      return { ...state, user: { ...state.user, info: { ...payload.info } }, nextBatchData: payload };
    default:
      return state;
  }
};

export default userReducer;