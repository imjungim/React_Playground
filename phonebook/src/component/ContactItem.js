import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const ContactItem = () => {
  return (
    <Row>
      <Col lg={1}>
        <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" alt="" />
      </Col>
      <Col lg={11}>
        <div>ㅇㅇㅇ</div>
        <div>111-1111</div>
      </Col>
    </Row>
  )
}

export default ContactItem