import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import MealsSummary from './MealsSummary'

function Header(props) {
  return <>
    <header className='flex justify-between p-4 bg-orange-300'>
        <h1 className='text-xl'>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
    </header>
    <div className='relative'>
        <img src={mealsImage} alt='A table full of delicious food!'></img>
        <MealsSummary></MealsSummary>
    </div>
  </>
}

export default Header
