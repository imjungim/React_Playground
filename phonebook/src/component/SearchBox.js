import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchBox = () => {
  return (
    <Row>
      <Col lg={ 10}>
        <Form.Control type="text" placeholder="이름을 입력하세요" />
      </Col>
      <Col lg={2}>
      <Button variant="primary" type="submit">
        찾기
      </Button>
      </Col>
    </Row>
  )
}

export default SearchBox