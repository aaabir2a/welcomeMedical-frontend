import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const fitness = ({children}) => {
  return (
    <>
      
    <Navbar buttonText="Check Mail"/>
    <div>fitness</div>
    <main>{children}</main>
    <Footer />
  </>
  )
}

export default fitness