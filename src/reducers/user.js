import { GET_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  const { type, email } = action;
  switch (type) {
  case GET_USER:
    return {
      ...state,
      email,
    };
  default:
    return state;
  }
}

export default user;
