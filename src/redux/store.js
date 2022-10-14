import {createStore,applyMiddleware} from "redux";
//import thunk from "redux-thunk";
//import productReducer from "./reducers/productReducer";
// import rootReducer from "./reducers"; // /index를 붙이지 않아도 자동으로 읽어온다. rootReducer는 임의로 만든 이름으로 바꿔도 됨.
// import { composeWithDevTools } from 'redux-devtools-extension';
import {configureStore} from "@reduxjs/toolkit";
import authenticateReducer from "./reducers/authenticateReducer";
import productReducer from "./reducers/productReducer";



// let store = createStore(rootReducer, 
//   composeWithDevTools(applyMiddleware(thunk)));

// export default store;

//Redux Toolkit사용시 4개 모두 자동으로
//rootReducer -> combineReducer 자동
//thunk 자동
//applymiddleware 자동
//composeWithDevTools 자동

//reducer파일이 여러개일때 파일 합치기!!
//새로운 redux-toolkit {configureStore}
//더이상 combinereducer를 쓸 필요가 없다.

const store = configureStore ({
  reducer : {
    auth : authenticateReducer,
    product : productReducer,

  }
})

export default store;