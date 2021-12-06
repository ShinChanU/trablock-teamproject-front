import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD'; // input 값
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'; // form 초기화

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // login, signup
    key, // username, password, name ..
    value
  })
);

export const initializeForm = createAction(
  INITIALIZE_FORM,
  form => form
);

const initialState = { // 불변성 유지하면서 객체 수정
  signup: {
    username: '',
    password: '',
    passwordConfirm: '',
    name: '',
    nickname: '',
    birthday: '',
    tel: '',
    email: '',
  },
  login: {
    form: {
      username: '',
      password: ''
    }
  }
};

const auth = handleActions({
  [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>  // action 대신 구조분해, action.payload.form, key.. 호출
    produce(state, draft => {
      draft[form][key] = value; // ex. state.signup.username
    }),
  [INITIALIZE_FORM]: (state, { payload: { form } }) => ({
    ...state,
    [form]: initialState[form],
  })
}, initialState);

export default auth;