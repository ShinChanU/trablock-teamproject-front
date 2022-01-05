import { handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes
} from 'lib/createRequestSaga';

const [GET_PLANS, GET_PLANS_SUCCESS, GET_PLANS_FAILURE] = createRequestActionTypes(
  'data/GET_PLANS'
);

export const getPlans = createRequestSaga(
  GET_PLANS
);

// 초기값
const initialState = {
  travelPlans: null,
  travelPlansError: null
}

const travelPlan = handleActions({
  [GET_PLANS_SUCCESS]: (state, { payload: travelPlans }) => ({
    ...state,
    travelPlans,
    travelPlansError: null,
  }),
  [GET_PLANS_FAILURE]: (state, { payload: error }) => ({
    ...state,
    travelPlansError: error,
  })
}, initialState);

export default travelPlan;

// user.js와 auth.js 를 보고 리듀서의 기본적인 형태 정리 필요
// 220105