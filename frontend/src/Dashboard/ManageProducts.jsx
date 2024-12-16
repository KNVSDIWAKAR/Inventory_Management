import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [gadgets, SetGadgets] = useState([]);
  useEffect(() => {
    fetch("https://iqbackend.vercel.app/view-product")
      .then((res) => res.json())
      .then((data) => SetGadgets(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://iqbackend.vercel.app/delete-product/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        alert("Product is deleted successfully");
        // You may update the state if needed
        // SetGadgets(data);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-4  w-full">
        <div>
          <Table className="lg:w-[1180px]">
            <Table.Head>
              <Table.HeadCell>Serial Number</Table.HeadCell>
              <Table.HeadCell>Product Id</Table.HeadCell>
              <Table.HeadCell>Product Name</Table.HeadCell>
              <Table.HeadCell>Brand</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              {/* <Table.HeadCell>Description</Table.HeadCell> */}
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Quantity</Table.HeadCell>
              <Table.HeadCell>
                <span>Manage</span>
              </Table.HeadCell>
            </Table.Head>
            {gadgets.map((gadget, index) => (
              <Table.Body className="divide-y" key={gadget._id}>
                <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {gadget._id}
                  </Table.Cell>

                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {gadget.productName}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {gadget.brand}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {gadget.Category}
                  </Table.Cell>

                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {gadget.price}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {gadget.quantity}
                  </Table.Cell>

                  <Table.Cell>
                    <Link
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-2"
                      to={`/admin/dashboard/edit/${gadget._id}`}
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(gadget._id)}
                      className="bg-red-600 px-3 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
