import { productActions } from '../reducers/productReducer';

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `http://localhost:5000/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } })
    dispatch(productActions.getAllProducts({data})) //createSlice가 만든 액션값을 가져온다.
    //action 객체를 만들어 줄 필요 없이 그냥 action함수를 호출
  }
}

export const productAction = { getProducts }
//함수들을 객체에 담아 리턴