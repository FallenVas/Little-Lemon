import React from 'react'
import Header from '../shared/navbar/Header'
import Hero from './hero/Hero'
import Special from './special/Special'
import Testomonials from './testomonials/Testomonials'
import Aboutus from './aboutus/Aboutus'
import Footer from '../shared/footer/Footer'

const Home = () => {
  return (
    <>
        <Header />
        <Hero/>
        <Special/>
        <Testomonials/>
        <Aboutus/>
        <Footer/>
    </>
  )
}

export default Home