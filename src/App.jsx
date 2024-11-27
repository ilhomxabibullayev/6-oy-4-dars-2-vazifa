import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Mahsulotlar</h1>
      <div className="products-container">
        {products?.data?.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <span className="product-price">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
