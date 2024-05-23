import React from "react";
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  return (
    <>
      <div className="fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5">
        <div className="flex justify-between items-center my-3 ">
            <span className="text-xl font-semibold text-gray-800">My Order</span>
            <IoMdClose className="border-2 border-grey-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-500" />
        </div>
      </div>
    </>
  );
};

export default Cart;
