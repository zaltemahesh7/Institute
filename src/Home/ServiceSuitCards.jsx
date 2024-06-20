import React from 'react'

function ServiceSuitCards() {
  return (
    <div className=' flex flex-col justify-center items-center'>
        <div className='z-0 '>
            <img src="logo.jpg" alt="Student Image" width={'120px'} className=' rounded-full border-4 border-[#07bcce]' />
        </div>

        <div className='justify-center text-center  items-center flex flex-col rounded-3xl mt-'>
            <p>Student Name </p>
            <p>student hos name logo Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nemo. Officiis, nobis.</p>
        </div>
    </div>
  )
}

export default ServiceSuitCards;