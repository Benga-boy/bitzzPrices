import React, { useState } from 'react'
import { Badge, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from 'reactstrap'

const Prices = ({ bpi }) => {
  const [currency, setCurrency] = useState('USD')

  const handleChange = e => {
    setCurrency(e.target.value)
  }

  let list

  if (currency === 'USD') {
    list = <ListGroup className="w-50">
      <ListGroupItem>
      Bitcoin rate for {bpi.USD.description}: <Badge>{bpi.USD.code}</Badge> <strong> {bpi.USD.rate}</strong>
      </ListGroupItem>
    </ListGroup>
  } else if (currency === 'GBP') {
    list = <ListGroup className="w-50">
      <ListGroupItem>
      Bitcoin rate for {bpi.GBP.description}: <Badge>{bpi.GBP.code}</Badge> <strong> {bpi.GBP.rate}</strong>
      </ListGroupItem>
    </ListGroup>
  } else if (currency === 'EUR') {
    list = <ListGroup className="w-50">
      <ListGroupItem>
      Bitcoin rate for {bpi.EUR.description}: <Badge>{bpi.EUR.code}</Badge> <strong> {bpi.EUR.rate}</strong>
      </ListGroupItem>
    </ListGroup>
  }

  return (
    <div>
      <Form className="w-50">
        <FormGroup>
          <Label>Search Bitcoin Rate</Label>
          <Input placeholder="Search USD GBP EUR" type="select" value={currency} onChange={handleChange}>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </Input>
        </FormGroup>
      </Form>
      {list}
    </div>
  )
}

export default Prices
