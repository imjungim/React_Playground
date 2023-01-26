import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { useDispatch } from 'react-redux'
import { authenticateAction } from '../redux/actions/authenticateAction'


const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (e) => {
    e.preventDefault() //form에서 새로고침하는 것을 막아준다.
    dispatch(authenticateAction.login(id,password))
    navigate('/');
  }
  return (
    <Container>
      <div className='Login'>
        <Form onSubmit={(e) => loginUser(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setId(e.target.value)}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit">
            로그인
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default Login