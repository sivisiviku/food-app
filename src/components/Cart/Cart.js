import React, { useContext, useState } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'

function Cart(props) {
  const [isCheckOut, setIsCheckout] = useState(false)
  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const cartItems = <ul> {cartCtx.items.map(item => <CartItem key={ item.id }
    name={item.name} 
    amount={item.amount} 
    price={item.price} 
    onRemove={cartItemRemoveHandler.bind(null, item.id)}
    onAdd={cartItemAddHandler.bind(null, item)}></CartItem>)} </ul>
  const hasItems = cartCtx.items.length > 0

  function cartItemRemoveHandler(id) {
    cartCtx.removeItem(id)
  }

  function cartItemAddHandler(item) {
    cartCtx.addItem(item)
  }

  function orderHandler() {
    setIsCheckout(true)
  }

  const modalActions = <div className='flex justify-end mt-4'>
    <button onClick={props.onClose} className='mr-2 border border-red-600 px-3 py-1 rounded-full'>Close</button>
    { hasItems && <button className='bg-red-600 text-white px-3 py-1 rounded-full' onClick={orderHandler}>Order</button> }
  </div>

  return <Modal onClose={props.onClose}>
        { cartItems }
      <div className='flex justify-between text-xl font-bold mt-2'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && <Checkout onCancel={props.onClose}/>}
      {!isCheckOut && modalActions}
  </Modal>
}

export default Cart
