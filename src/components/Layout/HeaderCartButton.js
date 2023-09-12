import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return <button onClick={props.onClick} className='bg-red-600 text-white rounded-md py-2 px-4'>
    <span>Your Cart</span>
    <span className='bg-orange-500 py-1 px-3 ml-4 rounded-full'>{numberOfCartItems}</span>
  </button>
}

export default HeaderCartButton
