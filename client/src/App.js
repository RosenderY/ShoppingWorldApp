import React, { useState } from 'react';
import Login from './components/Login';
import ProductList from './components/ProductList';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return token ? <ProductList token={token} /> : <Login setToken={setToken} />;
}

export default App;
