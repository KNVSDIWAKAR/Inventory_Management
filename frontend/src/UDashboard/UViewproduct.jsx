import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const UViewproduct = () => {
  const [gadgets, SetGadgets] = useState([]);
  useEffect(() => {
    fetch("https://iqbackend.vercel.app/view-product")
      .then((res) => res.json())
      .then((data) => SetGadgets(data));
  }, []);

  return (
    <div className="my-12">
      <div>
        <Table className="lg:w-[1180px]">
          <Table.Head>
            <Table.HeadCell>Serial Number</Table.HeadCell>
            <Table.HeadCell>Product Id</Table.HeadCell>
            <Table.HeadCell>Product Name</Table.HeadCell>
            <Table.HeadCell>Brand</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
          </Table.Head>
          {gadgets.map((gadget, index) => (
            <Table.Body className="divide-y" key={gadget._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
                  {gadget._id}
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
                  {gadget.productName}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
                  {gadget.brand}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
                  {gadget.Category}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
                  {gadget.description}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
                  {gadget.price}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
                  {gadget.quantity}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default UViewproduct;
