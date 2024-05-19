import React from 'react'
import Header from "./common/Header"
import Footer from "./common/Footer"

const ModulePageNotFound = () => {
  return (
    <section>
      <Header />
      <img src='/assets/images/404.jpg' alt="Page not found" className="w-[60%] mx-auto" />
      <Footer />
    </section>
  )
}

export default ModulePageNotFound