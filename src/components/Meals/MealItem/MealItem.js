import React, { useContext } from 'react'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

function MealItem(props) {
    const price = `$${props.price.toFixed(2)}`
    const cartCtx = useContext(CartContext)
    
    function addToCartHandler(amount) {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      })
    }

  return <li className='flex justify-between border-b border-b-white mb-4'>
    <div>
        <h3 className='text-lg font-semibold'>{ props.name }</h3>
        <div className='italic'>{ props.description }</div>
        <div className='text-red-800 text-xl font-bold mb-2'>{ price }</div>
    </div>
    <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id}></MealItemForm>
    </div>
  </li>
}

export default MealItem
