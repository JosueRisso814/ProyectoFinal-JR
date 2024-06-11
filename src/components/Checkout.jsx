import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { CartContext } from "../context/CartContext"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/config"

function Checkout() {

    const [OrderId, setOrderId] = useState('')

    const { carrito, PrecioTotal, setCarrito } = useContext(CartContext)
    
    const { register, handleSubmit } = useForm()

    const enviar = (data) => {
        const buyOrder = {
            cliente: data,
            productos: carrito,
            total: PrecioTotal()
        }
        console.log(buyOrder)

        const refOrder = collection(db, 'pedidos') 

        addDoc(refOrder, buyOrder)
        .then((doc) => {
            setOrderId(doc.id)
            setCarrito([]);
        })
    }
    
    if (OrderId) {
        return (
            <div>
                <h1>¡Compra Exitosa!</h1>
                <p>Tu orden de compra generó este id: {OrderId}</p>
            </div>
        )
    }
  return (
    <div>
        <h1>Finalizar Compra</h1>
        <form onSubmit={handleSubmit(enviar)}>

            <input type="text" placeholder='Ingrese su nombre' {...register('nombre')}/>
            <input type="text" placeholder='Ingrese su apellido'{...register('apellido')}/>
            <input type="phone" placeholder='Ingrese su telefono'{...register('telefono')}/>

            <button className='enviar' type='submit' >Enviar</button>
        </form>
    </div>
  )
}

export default Checkout