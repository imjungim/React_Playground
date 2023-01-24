import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const increase = () => {
    dispatch({type : "INCREMENT"}) //action객체 {type: 액션이름, payload(옵션)} -> reducer로 이동 자동으로 dispatch가 던진 액션을 받아올 수 있다!!
  }

  return (
    <div className="App">
      <h1>{ count}</h1>
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
