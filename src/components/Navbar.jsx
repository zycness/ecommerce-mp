import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className='flex space-x-6 text-lg font-bold underline'>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Productos</Link>
          </li>
          <li>
            <Link to={"/cart"}>Carrito</Link>
          </li>
        </ul>
      </nav>
    </header>
  ); 
};

export default Navbar;
