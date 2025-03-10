import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products?limit=3");
        setProducts(response.data.products);
      } catch (error) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="text-center">
      {/* 🎯 Hero Section */}
      <section style={{ backgroundColor: '#b8860b' }} className="text-white py-20 px-6">
        <h1 className="text-5xl font-bold text-gold-500 italic">Welcome to Golden Store</h1>
        <p className="mt-4 text-lg text-gold-300">
          Explore top-quality products at unmatched prices. Start shopping today!        </p>
        <Link
          to="/products"
          className="mt-6 inline-block bg-gold-500 text-white px-6 py-3 font-semibold rounded-full shadow-md hover:bg-gold-400 transition"
        >
          Browse Products
        </Link>
      </section>

      {/* 🔥 Featured Products */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-gold-600">🔥 Featured Products</h2>

        {loading ? (
          <p className="text-gray-500">Loading products...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-contain"
                />
                <h3 className="text-lg font-semibold mt-2 text-gold-500">{product.title}</h3>
                <p className="text-gold-600">${product.price}</p>
              </div>
            ))}
          </div>
        )}

        <Link
          to="/products"
          className="mt-6 inline-block bg-gold-500 text-black px-6 py-3 font-semibold rounded-full shadow-md hover:bg-gold-400 transition"
        >
          View All Products
        </Link>
      </section>
    </div>
  );
};

export default Home;
