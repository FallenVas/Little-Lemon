import React from 'react'
import { FaStar } from 'react-icons/fa'
const Review = ({rating=4 , Name='Adrian' , comment='This is a comment'}) => {
  return (
    <div className='my-5 w-full bg-white inline-flex flex-col gap-5  p-10'>
        <div className='flex gap-2'>
            {Array(Math.round(rating)).fill(0).map((_, index) => (<FaStar key={index} className='text-secondary'  />))}
            {Array(Math.round(5-rating)).fill(0).map((_, index) => (<FaStar key={index} className='text-black text-opacity-25'  />))}
        </div>
        <div className='flex items-center gap-5'>
            <img className='w-24 h-24' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="review" />
            <p className='text-2xl font-semibold'>{Name}</p>
        </div>
        <p className='text-left'>{comment}</p>
    </div>
  )
}

export default Review