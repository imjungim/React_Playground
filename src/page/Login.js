import React, { useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction} from '../redux/actions/authenticateAction';

//로그인을 하면 id, password, authenticate 정보 변경

const Login = ({setAuthenticate}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log("login user Function issue");
    dispatch(authenticateAction.login(id, password))
   
    // setAuthenticate(true);
    navigate('/');
  };

  return (
    <Container>
    <Form onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(event)=>setId(event.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
        로그인
      </Button>
    </Form>
    </Container>
  )
}


export default Login

//type submit 은 화면이 refresh가 된다.
//form에서 onSubmit으로
//  console.log("login user Function issue"); 페이지를 다시 새로고침하기 때문에 금방 사라짐.
//매번 새로고침되는것을 막아줘야한다.

//***Form 사용시에는 꼭 event.preventDefault()함수를 써줘야한다. */