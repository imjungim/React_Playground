import React, { Component } from "react";
import BoxClass from "./component/BoxClass";

export default class AppClass extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter2 : 0,
      num :1,
      value: 0,
    }; //state의 값을 객체로 생성 총 3개의 state 값이 있음. 
    console.log("constructor");
  }
  //class컴포넌트에서는 함수 생성 시 const를 쓰지 않아도 된다.
  increase = () => {
    this.setState({
      counter2 : this.state.counter2 + 1,
      value : this.state.value+1
    })
    console.log("increase function", this.state); //값을 바꾸는 setState호출 직후의 state 값을 확인하자.
  };
  
  componentDidMount() {
    //api 콜
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state) //현재 state의 값을 확인 increase 함수의 setState값을 비교해보자.
  }
  render() {
    console.log("render")
    return (
      <div>
        <div>state : {this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        {this.state.counter2 < 3 && <BoxClass num={this.state.value}/>} 
      </div>
    );
  }
}
//<Mounting>
//1. constructor state가 생성 (앱이 실행되자마자 해줘야 하는 작업들을 넣어준다.)
//2. render UI그리기
//3. componentDidMount() api콜 후 ui에 보여주기
// console이 찍히는 순서를 확인하자 -> 1>2>3 순서

//<Updating>
//setState, Newprops, Update시
//render() -> componentDidupdate(state update가 됐는지 확인.)

//componentDidUpdate console.log와 increase함수 내 setState값의 console값 차이를 확인하자
//클릭을 누르면 ?
//increase function 실행 = counter의 값이 아직 0으로 확인된다.(화면출력값은 1) 
//왜? 비동기적처리이기떄문 아직 변경전의 상태
//render > componentDidUpdate 에 최신 업데이트된 state값이 담겨있다.
//최신 업데이트된 값을 가지고 작업을 해야한다면 componentDidUpdate에서 해준다.


