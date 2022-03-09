import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from '../Constants/';

let initialState = {
  error: '',
  userLoginLoad: false,
  loginResponse: {},
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginResponse: action.payload,
        userLoginLoad: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginResponse: action.payload,
        userLoginLoad: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginResponse: action.payload,
        userLoginLoad: false,
      };
    default:
      return state;
  }
};

export default login;
