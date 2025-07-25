import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm font-[">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/Anime">Popular</Link>
              </li>
              <li>
                <Link href="/Favourites">Favourites</Link>
              </li>
            </ul>
          </div>
          <div>
            <a className="btn btn-ghost text-xl">AniKeep</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/Anime">Popular</Link>
            </li>
            <li>
              <Link href="/Favourites">Favourites</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn rounded-xl">
            <i className="fa-solid fa-user text-xl"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
