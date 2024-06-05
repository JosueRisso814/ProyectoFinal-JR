import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/CartContext';

function CartWidget() {
  const { numeroCarrito } = useContext(CartContext)

  return (
    <>
    <FaShoppingCart className='cartwidget' />
    <span className='numero-carrito'>{numeroCarrito()}</span>
    </>
  )
}

export default CartWidget