import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  productList : [],
  selectedItem : null,
}

function productReducer(state=initialState, action){
  let {type, payload} = action;
  switch (type){
    case "GET_PRODUCT_SUCCESS" :
      return {...state, productList : payload.data}
    case "GET_SINGLE_PRODUCT_SUCCESS" :
      return {...state, selectedItem : payload.data}
    default :
      return{...state};
  }
}

export default productReducer;

// const productSlice = createSlice(
//   name : "product",
//   initialState,
//   reducers : {
//     getAllProducts(state, action){
//       state.productList = action.payload.data
//     }, //creatSlice가 알아서 ...state처리를 해준다. 바꾸고 싶은 값만 
//     getSingleProduct (state, action) {
//       state.productList = action.payload.data
//     }
//   }
// });

// console.log("ppp",productSlice)

// export const productActions = productSlice.actions
// export default productSlice.reducer;