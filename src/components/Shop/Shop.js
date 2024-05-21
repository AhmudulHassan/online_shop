import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData/products.js"; // Corrected file extension
import "./Shop.css";
import Product from "../Product/Product.js";
import Summary from "../Summary/Summary.js";
import { addToDb } from "../../utilities/fakedb.js";

const Shop = () => {
  const first10 = fakeData.slice(0, 20);
  const [products, setProducts] = useState(first10); // Correct initial state

  useEffect(() => {
    setProducts(first10);
  }, [first10]); // Adding first10 as a dependency is not necessary since it's a static value, but it's correct to add it to avoid potential warnings

  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key, 1);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product
            key={pd.key} // Adding key prop to avoid React warnings
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
            product={pd}
          />
        ))}
      </div>
      <div className="cart-container">
        <Summary cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
