import React from 'react'
import Card from './atoms/Card'
import '../../styles/Card.css'; 


const CartContainer = () => {
  return (
        <div className='flex flex-col'>
          <div className='cart_title'>
          <h2>Cart</h2>
          <p>Continue Shopping</p>
          </div>
          <Card />
        </div>
  )
}

export default CartContainer