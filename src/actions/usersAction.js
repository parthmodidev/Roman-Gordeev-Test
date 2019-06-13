import axios from 'axios';
import { actionTypes } from '../reducers/userReducer';

export const getUsers = () => dispatch => {
  axios.get('https://randomuser.me/api/?results=50').then((response) => {
    dispatch({
      type: actionTypes.GET_USERS,
      payload: response.data,
    });
    axios.get(`https://randomuser.me/api/?page=2&results=50&seed=${response.data.info.seed}`).then((response) => {
      dispatch({
        type: actionTypes.NEXT_BATCH_DATA,
        payload: response.data,
      });

    }).catch((err) => {
      console.log(err);
    })
  }).catch((err) => {
    console.log(err);
  })
};

export const getMoreUsers = data => dispatch => {
  dispatch({ type: actionTypes.ATTACH_USERS_DATA });
  axios.get(`https://randomuser.me/api/?page=${data.page + 1}&results=50&seed=${data.seed}`).then((response) => {
    dispatch({
      type: actionTypes.NEXT_BATCH_DATA,
      payload: response.data,
    });
  }).catch((err) => {
    console.log(err);
  })
};

export const getUsersByNationality = data => dispatch => {
  axios.get(`https://randomuser.me/api/?results=50&nat=${data}`).then((response) => {
    console.log(response);
    dispatch({
      type: actionTypes.GET_USERS,
      payload: response.data,
    });
  }).catch((err) => {
    console.log(err);
  })
};