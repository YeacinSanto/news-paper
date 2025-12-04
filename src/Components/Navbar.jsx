import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You Logged Out successfully");
      })
      .catch((error) => {});
  };

  return (
    <div className="flex justify-between items-center">
      <div>{user && user.name}</div>

      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      <div className="login-btn flex gap-5 items-center">

        {user ? (
          <div className="flex items-center gap-3">
            <span className="font-semibold">
              {user.displayName || user.name}
            </span>

            <button onClick={handleLogOut} className="btn btn-primary px-10">
              LogOut
            </button>
          </div>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
