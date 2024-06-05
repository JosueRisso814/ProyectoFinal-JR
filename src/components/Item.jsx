import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

function Item({producto}) {
  return (
    <div className='contenedor'>
        <div className='card'>

                <img src={producto.image} alt={producto.title} />

            <div className='card-content'>

                <h3>{producto.title}</h3>
                <p>Precio: ${producto.price}</p>
                <p>Categoría: {producto.category}</p>
                <Link className='btn' to={`/item/${producto.id}`} >Ver Más</Link>

            </div>
        </div>
    </div>
  )
}

export default Item
