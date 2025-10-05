import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">Listed Books</a>
      </li>
      <li>
        <a href="">Pages to Read</a>
      </li>
    </>
  );
  return (
    <nav className="py-3 border-2 border-red-200">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-bold text-[18px] bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="font-bold text-xl md:text-3xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-[18px]">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="btn btn-sm md:btn-md btn-info">Sign Up</a>
          <a className="btn btn-sm md:btn-md btn-success">Sign In</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
