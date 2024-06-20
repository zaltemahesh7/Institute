import React from 'react'

function Card(props) {
  return (
    <div className=' flex flex-col py-10 mx-auto my-2 items-center justify-around gap-2 text-center'>
        <img className=' ' src={props.img} alt="card Images" />
        <h1 className='text-2xl font-bold'>{props.title}</h1>
        {/* <p>Card desc Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis fuga cumque aperiam!</p> */}
    </div>
  )
}

export default Card