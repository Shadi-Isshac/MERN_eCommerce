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
            <Link to="/cart">

            </Link>
        </li>
      </ul>
    </nav>
  )
}

export default navbar
