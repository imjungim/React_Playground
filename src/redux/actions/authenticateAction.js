function login (id, password) {
  return (dispatch, getState) => {
    //console.log("login success reducer")
    dispatch({type : "LOGIN_SUCCESS", payload : {id, password}});
  }
}

function logout (authenticate) {
  return (dispatch, getState) => {
   // console.log("logout success reducer")
    dispatch({type : "LOGOUT_SUCCESS", payload : {authenticate}});

  }
}


export const authenticateAction = {login, logout};