import './style.css';
import icon from '../assets/icon.png'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <nav className='navbar'>
        <div>
          <Link to={'/'}><img className='icon' src={icon} alt="" /></Link>
        </div>
        <ul className='navbar-links'>
          <li className='navbar-item'>
            <Link to={'/'} >Inicio</Link>
          </li>
          <li className='navbar-item'>
            <Link to={'/productos'} >Productos</Link>
          </li>
          <li className='navbar-item'>
            <Link to={'/category/gamabaja'} >Gama baja</Link>
          </li>
          <li className='navbar-item'>
            <Link to={'/category/gamamedia'} >Gama media</Link>
          </li>
          <li className='navbar-item'>
            <Link to={'/category/gamaalta'} >Gama alta</Link>
          </li>
          <li>
            <Link to={'/cart'} >
              <CartWidget />
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
