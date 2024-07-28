import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../actions';

const initialState = {
  loading: false,
  posts: [],
  error: null,
};

const postReducer = (state = initialState, action) => {
  console.log("state, action", state, action)
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;

//현재 상태와 액션 객체를 받아서 새로운 상태를 반환하는 함수입니다. 상태 변경 로직이 포함되어 있으며, 순수 함수여야 합니다.