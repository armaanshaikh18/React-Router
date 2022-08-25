import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <input type="search" placeholder="Search here!" />
      <nav>
        <Link to="feature">Fetured Products</Link>
        <Link to="new">New Products</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
