function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url)
    let data = await response.json()

    dispatch({ type: 'GET_PRODUCT_DETAIL', payload: { data } })
  }
}

export const productDetailAction = { getProductDetail }
