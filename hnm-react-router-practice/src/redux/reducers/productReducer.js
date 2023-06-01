import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  productList: [],
}

// function productReducer(state = initialState, action) {
//   let { type, payload } = action
//   switch (type) {
//     case 'GET_PRODUCT_SUCCESS':
//       return { ...state, productList: payload.data }
//     default:
//       return {...state}
//   }
// }

//export default productReducer

//createSlice가 반환하는값을 저장
const productSlice = createSlice({
  name:'product',
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload.data //...state를 해주지 않아도 됨.
    }
  }
})

console.log("productSlice", productSlice)

export default productSlice.reducer //하나의 큰 리듀서 export

