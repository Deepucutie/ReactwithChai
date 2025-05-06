// AllProductsPage.jsx
import React, { useEffect, useState } from 'react';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  // Simulated API fetch
  useEffect(() => {
    // You can replace this with a real API call
    setProducts([
      {
        id: 1,
        name: 'Herbal Hair Oil',
        price: 299,
        image: 'https://via.placeholder.com/300x300.png?text=Hair+Oil',
      },
      {
        id: 2,
        name: 'Ayurvedic Face Cream',
        price: 399,
        image: 'https://via.placeholder.com/300x300.png?text=Face+Cream',
      },
      {
        id: 3,
        name: 'Digestive Tablets',
        price: 199,
        image: 'https://via.placeholder.com/300x300.png?text=Tablets',
      },
    ]);
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl shadow-sm hover:shadow-lg transition-all p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-green-600 font-bold mb-2">₹{product.price}</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
