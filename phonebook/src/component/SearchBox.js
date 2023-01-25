import React, {useState} from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const searchByName = (e) => {
    e.preventDefault();
    dispatch({type : "SEARCH_BY_USERNAME", payload:{keyword}})
  }
  return (
  <Form onSubmit={searchByName} className="search-form">
    <Row>
      <Col lg={ 10}>
        <Form.Control type="text" placeholder="이름을 입력하세요" onChange={(e)=>setKeyword(e.target.value)}/>
      </Col>
      <Col lg={2}>
        <Button variant="primary" type="submit">
        찾기
      </Button>
      </Col>
      </Row>
   </Form>
  )
}

export default SearchBox