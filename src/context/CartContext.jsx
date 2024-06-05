import { createContext, useState } from "react";


export const CartContext = createContext([]);

export const CartProvider = ({children}) => { 
    
  const PrecioTotal = () => {
    return carrito.reduce((acc, prod)=> acc + prod.price * prod.cantidad, 0)
  }

  const numeroCarrito = () =>{
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const [carrito, setCarrito] = useState([]);

  return (
    <CartContext.Provider value={ { carrito, setCarrito , numeroCarrito, PrecioTotal } }>
        {children}
    </CartContext.Provider>
  )
}