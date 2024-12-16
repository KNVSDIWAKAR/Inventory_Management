import React, { useState } from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cart } = state;

  const [orderSuccess, setOrderSuccess] = useState(false);

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { itemId, newQuantity },
    });
  };

  const handlePlaceOrder = () => {
    const orderData = cart.map(({ id, quantity }) => ({ id, quantity }));

    // Implement the logic to place the order and update the database
    console.log("Placing order...");
    console.log("Updating database with new quantities:", orderData);

    // For demonstration purposes, let's assume you have a backend endpoint for placing orders
    fetch("http://localhost:4000/place-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart: orderData }), // Send orderData instead of cart directly
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Order placed successfully:", data);
        setOrderSuccess(true);
        // Reset the cart after a successful order (if needed)
        dispatch({ type: "RESET_CART" });
      })
      .catch((error) => {
        console.error("Error placing order:", error);
      });
  };

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-4">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Product</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border-b">{item.productName}</td>
                  <td className="py-2 px-4 border-b">${item.price}</td>
                  <td className="py-2 px-4 border-b">
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    ${item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4">
            <p className="text-xl font-semibold">
              Total: ${getTotalPrice().toFixed(2)}
            </p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handlePlaceOrder}
            >
              Order Now
            </button>
          </div>

          {orderSuccess && (
            <p className="text-green-500 mt-4">Order placed successfully!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
