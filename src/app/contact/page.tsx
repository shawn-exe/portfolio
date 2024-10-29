import React from 'react'
import { Nav } from '../components/navbar'
import ContactPage from '../components/contact'
import Footer from '../components/footer'
function page() {
  return (
    <div className='min-h-screen flex flex-col bg-[#121212] text-white'>
      <Nav/>
      <ContactPage/>
      <Footer/>
    </div>
  )
}

export default page
