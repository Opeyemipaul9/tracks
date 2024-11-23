import CreateDataContext from './CreateDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tracker from '../api/tracker';
import {navigate} from '../navigationref';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return {errorMessage: '', token: action.payload};
    default:
      return state;
  }
};

const signup =
  dispatch =>
  async ({email, password}) => {
    try {
      const response = await tracker.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signup', payload: response.data.token});

      navigate('AccountScreen');
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with signup',
      });
    }
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
  {token: null, errorMessage: ''},
);
