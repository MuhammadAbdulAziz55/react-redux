import axios from "axios";
import {
  GET_USERS_ERROR,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "../constants/usersConstant";

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USERS_REQUEST });
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_USERS_ERROR, payload: err.message });
  }
};
