import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";

const Store = () => {
  const [gadgets, setGadgets] = useState([]);
  const { state, dispatch } = useCart();
  const { cart } = state;

  const handleAddToCart = (gadget) => {
    const gadgetWithId = { ...gadget, id: gadget._id };

    dispatch({
      type: "ADD_TO_CART",
      payload: gadget,
    });
  };
  useEffect(() => {
    fetch("http://localhost:4000/view-product", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  return (
    <div>
      <div className="mt-10 px-4 lg:px24">
        <h2 className="text-2xl font-bold text-center center">
          Products In Store
        </h2>

        <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {gadgets.map((gadget) => (
            <Card href="#" className="max-w-sm">
              <img src={gadget.imageURL} alt=".." className="h-96" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-center">
                <p>{gadget.productName}</p>
              </h5>
              <p className="font-normal text-gray-900 dark:text-black text-center">
                {gadget.description}
              </p>
              <p className="text-center text-black">{gadget.productName}</p>
              <p className="text-center text-black">
                <span>&#8377;</span>
                {gadget.price}
              </p>
              <br />
              <Link to="/cart">
                <button
                  className="bg-blue-400 font-semibold text-white py-2 rounded mx-auto block"
                  onClick={() => handleAddToCart(gadget)}
                >
                  ADD TO CART
                </button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
