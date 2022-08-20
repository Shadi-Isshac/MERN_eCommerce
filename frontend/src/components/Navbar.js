import './Navbar.css';
import {Link} from 'react-router-dom';

const navbar = () => {
  return (
    <nav className ='navbar'>
      <div className="navbar__logo">
          <h2>Shop Meow</h2>
      </div>
     
     
      <ul className="navbar__links">
        <li>
            <Link to="/cart" className="cart__link">
              <i className="fas fa-shopping-cart"></i> 
             <span className='cart'>
               Cart 
               </span>
            <span className="cartlogo__badge">0</span>
            
            </Link>
        </li>
        <li>
            <Link to="/">Shop</Link>
        </li>
      </ul>

    <div className="hamburger__menu">
    <div></div>
    <div></div>
    <div></div>
    </div>
    </nav>
  )
}

export default navbar
