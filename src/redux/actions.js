import { LOG_IN } from "./actionTypes";

export const logIn = (user, email, token) => ({
  type: LOG_IN,
  payload: { user, email, token },
});
