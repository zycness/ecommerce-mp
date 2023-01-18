import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className='flex justify-center space-x-6 text-lg font-bold underline'>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Productos</Link>
          </li>
          <li>
            <Link to={"/cart"}>Carrito</Link>
          </li>
          <li>
            <div>
              <Link to={"/login"}>Login</Link>
            </div>
            <div>
              <Link to={"/register"}>Register</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
