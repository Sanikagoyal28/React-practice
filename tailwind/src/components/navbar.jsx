import { useState } from "react";

function Navbar() {
  function hamburger() {
    var icon = document.getElementById("hamburger");
    var list = document.getElementById("list");
    if (icon.innerHTML === "Menu") {
      icon.innerHTML = "Close";
      list.classList.add("top-[70px]");
      list.classList.add("opacity-100");
    } else {
      icon.innerHTML = "Menu";
      list.classList.remove("top-[70px]");
      list.classList.remove("opacity-100");
    }
  }

  return (
    <>
      <div className="z-[999]">
        <nav className="fixed bg-black text-gray-100 w-full md:flex md:items-center md:justify-between p-6 md:p-4 px-6 md:px-8 shadow-lg">
          <div className="flex justify-between items-center">
            <span>
              <img src="" alt="logo" className="w-fit flex bg-white" />
            </span>
            <span
              id="hamburger"
              className=" cursor-pointer text-blue-600 font-bold text-xl block md:hidden transition-all ease-in duration-500"
              onClick={hamburger}
            >
              Menu
            </span>
          </div>
          <ul
            id="list"
            className="bg-black left-0 px-6 md:px-0 md:flex md:gap-5 md:justify-end list-none text-base w-full md:ms-12 font-semibold uppercase pt-8 pb-4 md:py-0 transition-all ease-in duration-500 opacity-0 md:opacity-100 absolute md:static top-[-500px]"
          >
            <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-gray-300 md:hover:scale-95 duration-300 mb-4 md:mb-0 ">
              Home
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-gray-300 md:hover:scale-95 duration-300 mb-4 md:mb-0 ">
              About
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-gray-300 md:hover:scale-95 duration-300 mb-4 md:mb-0 ">
              <span className="hidden md:block">Contact</span>
              <input type="checkbox" id="dropdown2" className="hidden" />
              <label for="dropdown2" className="block md:hidden">
                Contact
              </label>
              {/* dropdown -> absolute positioning -> show dropdown by hovering on li */}
              <ul className="bg-slate-300 text-base py-0 md:py-[2px] w-full md:w-[150px] px-4 rounded ms-0 md:mt-0 md:absolute md:top-[30px] transition-all ease-in duration-300">
                <li className="my-2 text-slate-500 w-full">One</li>
                <li className="my-2 text-slate-500">Two</li>
                <li className="my-2 text-slate-500">Three</li>
                <li className="my-2 text-slate-500">Four</li>
                <li className="my-2 text-slate-500">Five</li>
              </ul>
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-gray-300 md:hover:scale-95 duration-300 mb-4 md:mb-0 ">
              Notifications
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-gray-300 md:hover:scale-95 duration-300 mb-4 md:mb-0">
              <span className="hidden md:block">Products</span>
              <input type="checkbox" id="dropdown" className="hidden" />
              <label for="dropdown" className="block md:hidden">
                Products
              </label>
              {/* dropdown -> absolute positioning -> show dropdown by hovering on li */}
              <ul className="bg-slate-300 text-base py-0 md:py-[2px] w-full md:w-[150px] px-4 rounded ms-0 md:mt-0 md:absolute md:top-[30px] transition-all ease-in duration-300">
                <li className="my-2 text-slate-500 w-full">First</li>
                <li className="my-2 text-slate-500">Second</li>
                <li className="my-2 text-slate-500">Third</li>
                <li className="my-2 text-slate-500">Fourth</li>
                <li className="my-2 text-slate-500">Fifth</li>
              </ul>
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-gray-300 md:hover:scale-95 duration-300 mb-4 md:mb-0 ">
              Profile
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-gray-300 md:hover:scale-95 duration-300 mb-4 md:mb-0 ">
              Service
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

// notice ul for responsive designs
// add span menu for hamburger menu
// add onclick function to menu to change the icon from hamburger to cross
// index.css file