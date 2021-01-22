import React, { useState } from 'react'
import axios from 'axios'
import { Button, FormGroup, Form, Input, Label, Row, Col, ListGroupItem, ListGroup, Badge } from 'reactstrap'

const Conversion = () => {
  const [data, setData] = useState(null)
  const [text, setText] = useState('')

  const handleConversion = async () => {
    try {
      const res = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice/${text.toUpperCase()}.json`)
      setData(res.data.bpi)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = e => {
    setText(e.target.value)
  }


  return (
    <div>
      <Form inline className="mb-4">
        <FormGroup>
          <Label className="mr-2">Type Your Currency</Label>
          <Input onChange={handleChange} value={text} type="text" placeholder="Enter currency" />
        </FormGroup>
        <Button color="primary" onClick={handleConversion} className="ml-1">Convert</Button>
      </Form>
      {
        data && <Row>
          <Col md="6">
            <p>USD</p>
            <ListGroup>
              <ListGroupItem>
                Bitcoin rate for {data.USD.description}: <Badge>{data.USD.code}</Badge> <strong> {data.USD.rate}</strong>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md="6">
            <p>{text.toUpperCase()}</p>
            <ListGroup>
              <ListGroupItem>
                Bitcoin rate for {data[text.toUpperCase()].description}: <Badge>{data[text.toUpperCase()].code}</Badge> <strong> {data[text.toUpperCase()].rate}</strong>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      }
    </div>
  )
}

export default Conversion
