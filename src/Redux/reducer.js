// reducer.js
import * as actionTypes from "./actionTypes";

const initialState = {
  location: null,
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LOCATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        location: action.payload,
        loading: false,
        error: null
      };
    case actionTypes.FETCH_LOCATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      case actionTypes.CLEAR_LOCATION:
        return {
          ...state,
          location: null,
          error: null,
        };
    default:
      return state;
  }
};

export default reducer;
