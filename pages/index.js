import React from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import Prices from '../components/Prices'

const Index = ({ bpi }) => {

  console.log(bpi)

  return (
    <Layout>
      <h1>Welcome to BitzzPrice</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={bpi} />
    </Layout>
  )
}


Index.getInitialProps = async () => {
  let res
  try {
    res = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  } catch (err) {
    console.log(err)
  }
  return {
    bpi: res.data.bpi
  }
}

export default Index
