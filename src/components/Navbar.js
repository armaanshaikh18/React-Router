import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
const Navbar = () => {
  const isStyled = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();
  return (
    <div>
      <nav className="primary-nav">
        <NavLink style={isStyled} to="/">
          Home
        </NavLink>
        <NavLink style={isStyled} to="about">
          About
        </NavLink>
        <NavLink style={isStyled} to="products">
          Products
        </NavLink>
        <NavLink style={isStyled} to="users">
          Users
        </NavLink>
        <NavLink style={isStyled} to="profile">
          Profile
        </NavLink>
        {!auth.user && (
          <NavLink style={isStyled} to="login">
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
