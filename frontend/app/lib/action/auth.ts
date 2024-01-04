import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING
} from './types';

export const register = (
  fullname: any,
  shortname: any,
  username: any,
  password: any,
  re_password: any
) => async dispatch => {
  const body = JSON.stringify({
    fullname,
    shortname,
    username,
    password,
    re_password
  })

  dispatch({
    type: SET_AUTH_LOADING
  })

  try{
    const res = await fetch('/user/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:body
    });
    if (res.status === 201) {
      dispatch({
        type: REGISTER_SUCCESS
      });
    }else {
      dispatch({
        type: REGISTER_FAIL
      })
    }
  } catch(err){
    dispatch({ type: REGISTER_FAIL});
  }

  dispatch({ type: REMOVE_AUTH_LOADING });
}