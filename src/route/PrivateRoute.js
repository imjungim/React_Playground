import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux';

const PrivateRoute = () => {
  const authenticate = useSelector((state)=>state.auth.authenticate);
  return ( authenticate == true? <ProductDetail/> : <Navigate to="/login"/>
  )
}

export default PrivateRoute

//조건(authenticate의 상태에따른)에 따라 상품디테일 페이지 보여주고..