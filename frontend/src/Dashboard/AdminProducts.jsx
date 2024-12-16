import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";
import "../Dashboard/SideBar.css";
const AdminProducts = () => {
  const [gadgets, setGadgets] = useState([]);
  const { state, dispatch } = useCart();
  const { cart } = state;

  const handleAddToCart = (gadget) => {
    const gadgetWithId = { ...gadget, id: gadget._id };
    // Dispatch an action to add the item to the cart
    dispatch({
      type: "ADD_TO_CART",
      payload: gadget,
    });
  };
  useEffect(() => {
    fetch("http://localhost:4000/view-product", {
      credentials: "include", // Include credentials in the request
    })
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  return (
    <div className="container max-w-sm bg-white p-4 rounded-lg flex flex-col ">
      <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {gadgets.map((gadget) => (
          <div className="container max-w-sm bg-white shadow-md rounded-lg flex flex-col p-4">
            <img
              src={gadget.imageURL}
              alt=".."
              className="w-50 h-50 object-cover mx-auto"
            />
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">
              <p>{gadget.productName}</p>
            </h5>
            <p className="text-center text-black">
              <span>&#8377;</span>
              {gadget.price}
            </p>
            <div className="mt-auto">
              {" "}
              {/* This will push the button to the bottom */}
              <Link to="/cart">
                <button
                  className="bg-blue-400 font-semibold text-white p-2 rounded mx-auto block"
                  onClick={() => handleAddToCart(gadget)}
                >
                  ADD TO CART
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
