import CreateDataContext from './CreateDataContext';
import tracker from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({email, password}) => {
    try {
      const repsonse = await tracker.post('/signup', {email, password});
      console.log(repsonse.data);
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with signup',
      });
    }
  };
};

const signin = dispatch => {
  return ({email, password}) => {};
};
const signout = dispatch => {
  return () => {};
};

export const {Provider, Context} = CreateDataContext(
  authReducer,
  {signup, signin, signout},
  {isSignedIn: false, errorMessage: ''},
);
