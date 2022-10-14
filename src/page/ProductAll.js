import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";
import {productAction} from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  // const [productList, setProductList] = useState([]); 리덕스 적용
  const productList = useSelector(state=> state.product.productList)
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  // const [error, setError] = useState("");

  // const getProducts = async () => {
  //   try {
  //     let searchQuery = query.get("q") || "";
  //     console.log("쿼리는? :", searchQuery);
  //     let url = `http://localhost:5000/products?q=${searchQuery}`;
  //     let response = await fetch(url);
  //     let data = await response.json();
  //     if (data.length < 1) {
  //       if (searchQuery !== "") {
  //         setError(`${searchQuery}와 일치하는 상품이 없습니다.`);
  //       } else {
  //         throw new Error("결과가 없습니다.");
  //       }
  //     }
  //     setProductList(data);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  //미들웨어를 불러와야하는 함수 getProducts를 productReducer.js에 만들어주자
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
      console.log("쿼리는? :", searchQuery);
      //여기서 바로 action지정 시 미들웨어를 거치지않고 store로 간다.안돼 getProduct함수를 거쳐서가야함.
      dispatch(productAction.getProducts(searchQuery))//dispatch가 미들웨어를 거쳐가게된다.

  }

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        {/* {error ? (
          <Alert variant="danger">{error}</Alert>
        ) : ( */}
          <Row>
            {productList.map((item) => (
              <Col md={3} sm={12} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
      
      </Container>
    </div>
  );
};

export default ProductAll;
