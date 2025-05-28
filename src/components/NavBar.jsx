import React from "react";

import { useAuth } from "../context/context";
import { Link, NavLink, useNavigate } from "react-router";
const NavBar = () => {
  const { signedIn, setSignedIn, user, setUser } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("token");
    setSignedIn(false);
    setUser(null);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div className="navbar bg-zinc-700 ">
      <div className="navbar-start">
        <Link className="font-bold text-white" to="/">
          Event Scheduler
        </Link>
      </div>

      <div className="navbar-end">
        {user && <p className="mr-2 text-white">Welcome back, {user.email}</p>}
        <ul className="menu menu-horizontal items-baseline gap-2">
          <li className="font-bold text-white">
            <NavLink to="/">Home</NavLink>
          </li>

          {signedIn ? (
            <>
              <li className="text-white font-bold">
                <NavLink to="/eventboard">My Events</NavLink>
              </li>
              <li>
                <button
                  className="cursor-pointer bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-2 rounded-full shadow hover:from-purple-700 hover:to-indigo-700"
                  onClick={handleSignOut}>
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup">
                  <button
                    className="cursor-pointer bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-2 rounded-full shadow hover:from-purple-700 hover:to-indigo-700"
                    // onClick={handleSignIn}
                  >
                    Sign Up
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/signin">
                  <button
                    className="cursor-pointer bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-2 rounded-full shadow hover:from-purple-700 hover:to-indigo-700"
                    // onClick={handleSignIn}
                  >
                    Sign In
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
