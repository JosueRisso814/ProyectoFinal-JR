import Item from "./Item"
import './style.css';
function ItemList({prod}) {

  return (
    <div>
      <div>
        {prod.map((res)=> <Item key={res.id} producto={res} />)}
      </div>
    </div>
  )
}

export default ItemList
