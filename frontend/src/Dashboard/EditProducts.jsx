import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  Button,
  Checkbox,
  Select,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
//
const EditProducts = () => {
  const { id } = useParams();
  const { productName, brand, imageURL, description, price, quantity } =
    useLoaderData();

  const Category = [
    "Television (TV)",
    "Smartphone",
    "Laptop",
    "Desktop Computer",
    "Tablet",
    "Digital Camera",
    "Headphones",
    "Bluetooth Speaker",
    "Microwave Oven",
    "Refrigerator",
    "Air Conditioner",
    "Washing Machine",
    "Game Console (e.g., PlayStation, Xbox)",
    "Smartwatch",
    "Fitness Tracker",
    "E-reader (e.g., Kindle)",
    "Drone",
    "Projector",
    "GPS Device",
    "Electric Toothbrush",
    "Digital Thermometer",
    "Electric Shaver",
    "Hair Dryer",
    "Vacuum Cleaner",
    "Electric Fan",
    "KeyBoard",
    "Heater",
  ];
  const [productCat, setProductCat] = useState(Category[0]);

  const handleChangeSelectedValue = (event) => {
    setProductCat(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;

    const productName = form.productName.value;
    const price = form.price.value;
    const description = form.description.value;
    const brand = form.brand.value;
    const imageURL = form.imageURL.value;
    const Category = form.Category.value;
    const quantity = form.quantity.value;

    const updategadgets = {
      productName,
      price,
      description,
      brand,
      imageURL,
      Category,
      quantity,
    };
    fetch(`http://localhost:4000/update-product/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updategadgets),
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        alert("Product Updated successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the Product </h2>
      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          {/* Product Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="productName" value="productName" />
            </div>
            <TextInput
              id="productName"
              name="productName"
              placeholder="Product Name"
              required
              type="text"
              defaultValue={productName}
            />
          </div>

          {/* Brand */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="brand" value="Brand" />
            </div>
            <TextInput
              id="brand"
              name="producbrandtName"
              placeholder="Brand"
              required
              type="text"
              defaultValue={brand}
            />
          </div>
        </div>

        {/* Catageory */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Category" />
            </div>
            <Select
              id="inputState"
              name="Category"
              className="w-full rounded"
              value={productCat}
              onChange={handleChangeSelectedValue}
            >
              {Category.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>

          {/* Description */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <Textarea
              id="description"
              name="description"
              placeholder="Description"
              required
              type="text"
              defaultValue={description}
            />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Price */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              id="price"
              name="price"
              placeholder="Price"
              required
              type="text"
              defaultValue={price}
            />
          </div>

          {/* imgURL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="imageURL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              placeholder="Product Image Link"
              required
              type="url"
              defaultValue={imageURL}
            />
          </div>
          {/*Quantity */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="quantity" />
            </div>
            <TextInput
              id="quantity"
              name="quantity"
              placeholder="Quantity"
              required
              type="text"
              defaultValue={quantity}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="mt-5 bg-blue-700"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Update Product
        </Button>
      </form>
    </div>
  );
};

export default EditProducts;
