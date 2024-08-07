import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      {/* Destructuring children components */}
      <div>{ children }</div>
      <Footer/>

    </>
  )
}

export default Layout
