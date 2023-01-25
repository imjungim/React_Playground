import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  const count = useSelector(state => state.count) //store에 있는 모든 state를 매개 변수로 받는다.(그 전체 중 count의 값만)
  let id = useSelector(state => state.id)
  let password = useSelector(state => state.password)
  const dispatch = useDispatch()
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } }) //action객체 {type: 액션이름, payload(옵션)} -> reducer로 이동 자동으로 dispatch가 던진 액션을 받아올 수 있다!!
    //payload 필요한 값을 보내줄 수 있다. 5씩 증가 ( 매개변수처럼 사용한다.)
  }

  const decrease = () => {
    dispatch({ type: "DECREASE", payload: {num:2} })
  }

  const login = () => {
    dispatch({type : "LOGIN", payload:{id:'jungim', password : "123"}})
  }

  return (
    <div className="App">
      <h1>{id}, {password }</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease }>감소</button>
      <button onClick={login }>Login</button>
      <Box/>
    </div>
  );
}

export default App;
