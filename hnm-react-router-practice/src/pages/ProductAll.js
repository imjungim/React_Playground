import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { productAction } from './../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  const productList = useSelector(state=>state.productList)
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get("q") || "";
   // console.log("query?", searchQuery)
    //미들웨어를 불러줘야한다.
    dispatch(productAction.getProducts(searchQuery))//store로 이동이아닌 getProduct(미들웨어)를 거쳐서
  }

  useEffect(() => {
    getProducts()
  }, [query]) //query가 바뀔때마다 실행

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll