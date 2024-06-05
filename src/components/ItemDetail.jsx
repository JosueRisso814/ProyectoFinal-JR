import { useContext, useState } from 'react';
import Count from './Count';
import './style.css';
import { CartContext } from '../context/CartContext';

function ItemDetail({item}) {

  const {carrito, setCarrito} = useContext(CartContext); 
  console.log(carrito)

  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
      cantidad < item.stock && setCantidad(cantidad + 1)
  }

  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  const addToCart = () =>{

    const ProductAgg = {...item, cantidad};
    
    const NewCart = [...carrito];

    const EstaEnElCarrito = NewCart.find((item) => item.id === ProductAgg.id);

    if (EstaEnElCarrito) {
      EstaEnElCarrito.cantidad += cantidad;
    } else {
      NewCart.push(ProductAgg)
    }
    setCarrito(NewCart);
  }

  return (
    <div>
    <h2 className='title-detail'>Detalles del producto</h2>
      <div className='card'>
          <div className='card-content'>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <h4>{item.desription}</h4>
            <Count cantidad={cantidad} 
            handleRestar={handleRestar} 
            handleSumar={handleSumar} 
            agregarAlCarrito={addToCart} />
          </div>
      </div>
    </div>
  )
}

export default ItemDetail
