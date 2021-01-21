import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import { Container } from 'reactstrap'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>BitzzPrice</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
      </Head>
      <Navbar />
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default Layout
