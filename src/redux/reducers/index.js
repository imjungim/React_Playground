import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer"; //합쳐줄 reducer


export default combineReducers({
  auth : authenticateReducer,
  product : productReducer,
});

//reducer를 합쳐주는곳.
//combineReducer
//합치고 싶은 reducer를 객체의 형태로 합쳐서 내보낸다
//->store에 적용