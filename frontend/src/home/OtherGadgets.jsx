import React from "react";
import { useState, useEffect } from "react";
import GadgetCard from "../components/GadgetCard";

const OtherGadgets = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/view-product")
      .then((res) => res.json())
      .then((data) => setGadgets(data.slice(3, 8)));
  }, []);
  return (
    <div className="mt-15 py-12  px-4 lg:px-24">
      <GadgetCard gadgets={gadgets} headline="Other Selling Products" />
    </div>
  );
};
export default OtherGadgets;
