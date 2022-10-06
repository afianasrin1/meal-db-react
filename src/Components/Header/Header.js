import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-pink-200 py-10 font-bold flex gap-5 justify-center ">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/mealdb"
        >
          MealDb
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/resturent"
        >
          Resturent
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
