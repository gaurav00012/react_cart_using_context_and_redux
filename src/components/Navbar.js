import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
return (
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <div className="container">
     <Link className="navbar-brand" to="/">eCommerce</Link>
     <div>
       <Link className="nav-link" to="/cart">Cart</Link>
       <Link className="nav-link" to="/wishlist">Wishlist</Link>
     </div>
   </div>
 </nav>
);
}

export default Navbar;
