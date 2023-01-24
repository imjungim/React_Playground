//state 초기화 어떤 state가 있는지
let initialState = {
  count:0,
}


function reducer(state=initialState, action) {
  console.log(action)//component에서  dispatch로 받아온 action

  if (action.type === "INCREMENT") {
    return {...state, count: state.count +1} //return 필수 state를 변경해줌
  }

  return {...state} //store는 return이 무조건 있어야 한다. 그래서 reducer에서 무조건 기본 리턴이 필요!
}

export default reducer //store에 적용시켜준다.