import React from 'react'

const Input = React.forwardRef((props, ref) => {
  return <>
    <label className='font-semibold mr-2' htmlFor={ props.input.id }>{ props.label }</label>
    <input ref={ref} className='mr-2 px-1 rounded-md' id={ props.input.id } { ...props.input }></input>
  </>
}) 

export default Input
