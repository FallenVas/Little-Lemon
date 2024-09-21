import React from 'react'
import Review from '../review/Review'

const Testimonials = () => {
  return (
    <section id='testimonials' className="my-5 bg-primary flex justify-center flex-wrap items-center">
    <h1 className='text-4xl text-center text-secondary font-bold w-full md:text-3xl'>Testimonials</h1>
    <div className='mx-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
      <Review rating={1.75} />
      <Review />
      <Review />
      <Review />
    </div>
  </section>
  )
}

export default Testimonials