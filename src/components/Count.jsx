import './style.css'
function Count({cantidad, handleRestar, handleSumar, agregarAlCarrito}) {
  return (
    <div className='container-count'>
    <button className='buttonHandle a' onClick={handleRestar}>-</button>
        <p className='cantidad-count'>{cantidad}</p>
        <button className='buttonHandle a' onClick={handleSumar}>+</button>
        <button className='buttonHandle-agg a' onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  )
}

export default Count
