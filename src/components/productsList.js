import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { PRODUCTS } from "../constants";

const ProductsList = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [selectedProduct, setSelectdProduct] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const addProduct = () =>
    setProducts([
      ...products,
      {
        name,
        brand,
        price,
        id: new Date().getTime(),
      },
    ]);

  const removeProduct = (selectedId) =>
    setProducts(products.filter((p) => p.id !== selectedId));

  const handleEditProduct = (product) => {
    setName(product.name);
    setBrand(product.brand);
    setPrice(product.price);
    setEditMode(true);
    setSelectdProduct(product);
  };

  const updateProduct = () => {
    setProducts(
      products.map((p) =>
        p.id === selectedProduct.id
          ? { ...selectedProduct, name, brand, price }
          : p
      )
    );
  };

  return (
    <div>
      <h1>Products List</h1>
      <div className="products-container">
        {products.map((p, j) => (
          <div className="product" key={p.id}>
            <div className="sn">
              <span>{j + 1}</span>
            </div>
            <div className="col">
              <span>{p.name}</span>
            </div>
            <div className="col">
              <span>{p.brand}</span>
            </div>
            <div className="col">
              <span>{p.price}</span>
            </div>
            <div className="col">
              <BsTrash color={"red"} onClick={() => removeProduct(p.id)} />
              <BiEdit color={"blue"} onClick={() => handleEditProduct(p)} />
            </div>
          </div>
        ))}
      </div>
      <div className="product">
        <input
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          name="brand"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Brand"
        />
        <input
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          type="number"
        />
        <button className="" onClick={addProduct}>
          {editMode ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
