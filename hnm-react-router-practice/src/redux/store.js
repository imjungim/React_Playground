import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index' 

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
//reducer파일이 여러개(기능별)이면 합쳐서 적용을 해줘야한다.
export default store                                                                                                       