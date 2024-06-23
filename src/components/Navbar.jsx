import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice.js";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import NavList from "./NavList.jsx";
import axios from "axios";
axios.defaults.withCredentials = true;

const Navbar = () => {
  const dispatch = useDispatch();
  const [toggleNav, setToggleNav] = useState(false);
  const auth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);

  const getUser = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_HOST_URL}/auth/get-user`,
      { withCredentials: true }
    );
    const data = await res.data;
    console.log(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <nav className="flex flex-col md:flex-row justify-between mx-6 py-3 mb-6">
      <div className="flex gap-2 md: justify-center">
        <img
          src="/logo.png"
          alt="logo.png"
          className=" w-12 h-12 mix-blend-multiply"
        />
        <h1 className="text-2xl font-bold my-2">Tasty Bites</h1>
      </div>
      <div className="md:mt-0 mt-5">
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here..."
          autoComplete="off"
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full md:w-[30vw]"
          onChange={(e) => dispatch(setSearch(e.target.value.toLowerCase()))}
        />
      </div>

      <GiHamburgerMenu
        className={`absolute top-5 right-5 lg:right-8 lg:top-6 text-2xl text-gray-600 cursor-pointer ${
          toggleNav && "hidden"
        } transition-all ease-in-out duration-500`}
        onClick={() => setToggleNav(true)}
      />
      <MdClose
        className={`absolute top-5 right-5 lg:right-8 lg:top-6 text-2xl text-gray-600 cursor-pointer ${
          !toggleNav && "hidden"
        } transition-all ease-in-out duration-500`}
        onClick={() => setToggleNav(false)}
      />
      <NavList toggleNav={toggleNav} setToggleNav={setToggleNav} auth={auth} />
    </nav>
  );
};

export default Navbar;
