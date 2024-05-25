import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();
  // const query = useRef();

  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-6">
      <div className="flex gap-2">
        <img src="/src/assets/logo.png" alt="logo.png" className=" size-8" />
        <h1 className="text-2xl font-bold">Tasty Bites</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here..."
          autoComplete="off"
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] lg:mt-0 sm:mt-5"
          // ref={query}
          onChange={(e) => dispatch(setSearch(e.target.value.toLowerCase()))}
        />
      </div>
    </nav>
  );
};

export default Navbar;
