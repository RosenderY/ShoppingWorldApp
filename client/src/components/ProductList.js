import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data));
  }, []);

  const addProduct = () => {
    axios.post('http://localhost:5000/api/products', { name, price })
      .then(res => setProducts([...products, res.data]));
  };

  return (
    <div>
      <h2>Product List</h2>
      <input placeholder="Product Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <button onClick={addProduct}>Add</button>
      <ul>
        {products.map(p => (
          <li key={p._id}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
