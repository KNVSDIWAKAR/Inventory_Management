import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state of the cart
const initialState = {
  cart: [],
};

// Create a context for the cart
const CartContext = createContext();


// Define a reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
      case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, quantity: action.payload.newQuantity }
            : item
        ),
      };
      case 'RESET_CART':
    return {
        ...state,
        cart: [],
    };

    // Add more cases as needed (e.g., remove from cart, update quantity)
    default:
      return state;
  }
};

// Create a CartProvider component to wrap your app with the cart context
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to easily access the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
