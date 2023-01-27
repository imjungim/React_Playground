import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { productDetailAction } from '../redux/actions/productDetailAction'

const ProductDetail = () => {
  let { id } = useParams()
  const product = useSelector((state) => state.productDetail.product)

  const dispatch = useDispatch()
  const getProductDetail = () => {
    dispatch(productDetailAction.getProductDetail(id))
  }

  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="product-image" />
        </Col>
        <Col>
          <h4>{product?.title}</h4>
          <h4>{product?.price.toLocaleString()}</h4>
          <p>{product?.choice === true ? 'Conscious choice' : ''}</p>

          <Dropdown>
            <Dropdown.Toggle variant="black" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button variant="dark" className="detail-btn">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
