import React from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import Prices from '../components/Prices'
import Conversion from '../components/Conversion'

const Index = ({ bpi }) => {

  return (
    <Layout>
      <section>
        <h1>Welcome to BitzzPrice</h1>
        <p>Check current Bitcoin rate</p>
        <Prices bpi={bpi} />
      </section>
      <section className="mt-5">
        <p>Check the rate for your specified currency</p>
        <Conversion />
      </section>
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
