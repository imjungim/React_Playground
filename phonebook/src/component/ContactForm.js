import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const dispatch = useDispatch();
  const addContact = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: {name, phoneNumber} })
    
  }

  return (
    <div>
      <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력하세요" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력하세요" onChange={(e)=>setPhoneNumber(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        저장
      </Button>
    </Form>
    </div>
  )
}

export default ContactForm