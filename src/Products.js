import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=10")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
