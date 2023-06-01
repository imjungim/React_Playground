import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index' 

import { configureStore } from '@reduxjs/toolkit'

import authenticateReducer from './authenticateReducer'
import productReducer from './productReducer'
import productDetailReducer from './productDetailReducer'


//기존 리듀서는 combineReducer를 통해서 합친 reducer를 store에 전달
//combineReducer -> 자동셋업
//thunk -> 자동셋업
//applyMiddleware -> 자동셋업
//composeWithDevTools -> 자동셋업

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// )
//reducer파일이 여러개(기능별)이면 합쳐서 적용을 해줘야한다.

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
    productDetail:productDetailReducer,
  }
})
export default store                                                                                                       