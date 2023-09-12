import React from 'react'

function Card(props) {
  return <div className='bg-orange-300 w-3/4 rounded-xl shadow-md p-4'>
    {props.children}
  </div>
}

export default Card
