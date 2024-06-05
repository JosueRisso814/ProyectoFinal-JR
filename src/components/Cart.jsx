import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {

    const { carrito, PrecioTotal, setCarrito } = useContext(CartContext)

    const vaciarCarrito = () => {
        setCarrito([]);
    }
    
  return (
    <>
        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <h2>{prod.title}</h2>
                    <p>Precio unitario: ${prod.price}</p>
                    <p>Precio total: ${prod.price * prod.cantidad}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                </div>
            ))
        }

        {
        carrito.length >= 1 ?
        <>
            <h2>Precio total: ${PrecioTotal()}</h2>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </> :
        <h2>Carrito Vacio</h2>
        }
    </>
  )
}

export default Cart