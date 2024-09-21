import React from 'react'
import logo from '../../../assets/Logo.svg'

const Footer = () => {
  return (
    <footer className="border border-primary mt-10 md:flex md:justify-center gap-20 md:items-center md:flex-row grid grid-cols-2 ">
      <img src={logo} alt="logo" className="md:w-1/4 w-full col-span-2" />
      <div className="inline-flex flex-col gap-5 md:w-1/2 w-full">
        <p className="text-xl text-primary font-semibold">Doormat navigation</p>
        <a href="/" className="hover:text-secondary">Home</a>
        <a href="/#aboutus" className="hover:text-secondary">About</a>
        <a href="/#menu" className="hover:text-secondary">Menu</a>
      </div>
      <div className="inline-flex flex-col gap-5 md:w-1/4 w-full">
        <p className="text-xl text-primary font-semibold">Contact</p>
        <p>Address</p>
        <p>Phone</p>
        <p>Email</p>
      </div>
      <div className="inline-flex flex-col gap-5 md:w-1/4 w-full">
        <p className="text-xl text-primary font-semibold">Contact</p>
        <p>Address</p>
        <p>Phone</p>
        <p>Email</p>
      </div>
    </footer>
  )
}

export default Footer