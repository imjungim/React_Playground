import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector(state=>state.count) //store에 있는 모든 state를 매개 변수로 받는다.(그 전체 중 count의 값만)
  const dispatch = useDispatch()
  const increase = () => {
    dispatch({type : "INCREMENT"}) //action객체 {type: 액션이름, payload(옵션)} -> reducer로 이동 자동으로 dispatch가 던진 액션을 받아올 수 있다!!
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
