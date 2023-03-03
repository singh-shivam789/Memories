import axios from "axios";
import { LoginStart, LoginFailure, LoginSuccess } from "../context/AuthActions";
export const login = async (userCredentials, dispatch) => {
  dispatch(LoginStart(userCredentials));
  try {
    const res = await axios.post("auth/login", userCredentials);
    dispatch(LoginSuccess(res.data));
  } catch (error) {
    dispatch(LoginFailure(error));
  }
};
