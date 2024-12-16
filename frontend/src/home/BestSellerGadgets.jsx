import React, { useEffect, useState } from "react";
import GadgetCard from "../components/GadgetCard";

const BestSellerGadgets = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/view-product")
      .then((res) => res.json())
      .then((data) => setGadgets(data.slice(0, 10)));
  }, []);
  return (
    <div>
      <GadgetCard gadgets={gadgets} headline="Best Selling Products" />
    </div>
  );
};

export default BestSellerGadgets;
