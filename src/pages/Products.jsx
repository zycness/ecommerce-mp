import React, { useEffect, useState } from "react";
import { getProducts } from "../api/index";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      console.log(data);
      setProducts(data);
    });
  }, []);

  return (
    <ul className='flex flex-wrap items-center '>
      {products.length == 0
        ? "Cargando..."
        : products.map((item) => {
            return (
              <li
                key={item.id}
                className='m-1 flex min-h-[150px] w-24 flex-col items-center justify-start rounded-md bg-slate-100 p-2 text-center'
              >
                <img src={item.image} alt={item.title} width={50} />
                <h1>{item.title}</h1>
              </li>
            );
          })}
    </ul>
  );
};

export default Products;
