//미들웨어 함수 생성
import {productActions} from "../reducers/productReducer"

function getProducts(searchQuery) {
  return async (dispatch, getState) =>{
    //dispatch = action값 , getState = 현재의 state값을 받아볼 수 있다.
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data) 데이터값 확인 
   dispatch({type : "GET_PRODUCT_SUCCESS", payload : {data}})
    //dispatch(productActions.getAllProducts({data}))
    // setProductList(data);
  }
}

function getProductDetail(id) {
  return async (dispatch) =>{
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data) 데이터값 확인 
    dispatch({type : "GET_SINGLE_PRODUCT_SUCCESS", payload : {data}})
  }
}

export const productAction = {getProducts, getProductDetail}
//객체에 함수를 담아서 반환함.
//앞으로 미들웨어가 여러개가 될것.



