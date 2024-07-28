import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POSTS_REQUEST, fetchPostsSuccess, fetchPostsFailure } from '../actions';

function* fetchPosts() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}

export default watchFetchPosts;

//사가(sagas)는 Redux 액션에 응답하고, 비동기 작업(예: API 호출)을 처리하는 함수입니다. 사가는 제너레이터 함수로 작성되며, Redux-Saga 라이브러리를 사용하여 비동기 흐름을 관리합니다.
// takeEvery API를 호출하고, 결과를 Redux 스토어에 저장하는 경우를 생각해볼 수 있습니다.
// FETCH_POSTS_REQUEST 액션이 여러번 디스패치 되면 fetchPosts 병렬로 여러번 실행될 수 있다.