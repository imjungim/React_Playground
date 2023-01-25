//state 초기화 어떤 state가 있는지
let initialState = {
  count: 0,
  id: "",
  password:"",
}


function reducer(state=initialState, action) {
 // console.log(action)//component에서  dispatch로 받아온 action

  // if (action.type === "INCREMENT") {
  //   return {...state, count: state.count + action.payload.num} //return 필수 state를 변경해줌
  // }
  // return {...state} //store는 return이 무조건 있어야 한다. 그래서 reducer에서 무조건 기본 리턴이 필요!
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num }
    case "DECREASE":
      return { ...state, count: state.count - action.payload.num}
    case "LOGIN":
      return { ...state, id: action.payload.id, password: action.payload.password}
    default:
      return {...state}
  }

}

export default reducer //store에 적용시켜준다.