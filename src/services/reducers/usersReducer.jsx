import {
  GET_USERS_ERROR,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "../constants/usersConstant";

const initialState = {
  isLoading: false,
  users: [],
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        isLoading: false,
        users: action.payload,
        error: null,
      };

    case GET_USERS_ERROR:
      return {
        isLoading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
