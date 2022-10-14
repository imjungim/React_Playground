import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
 // const product = useSelector((state)=>state.product.selectedItem);
  const dispatch = useDispatch();
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async() => {
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data)
   // dispatch(productAction.getProductDetail(id))
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice}</div>

          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.length >0 && 
              product.size.map((item)=>
              <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
          <button className="add-button">추가</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
