import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
}

interface ProductsProps {
  searchTerm: string;
  addToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ searchTerm = "", addToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>("default");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        if (response.data && response.data.products) {
          setProducts(response.data.products);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (error) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products
    .filter((product) =>
      product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      selectedCategory === "all" || product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-right">🛒 Browse Products</h2>

      <div className="flex space-x-4 mb-6 justify-end">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-lg"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="default">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-end">
          {filteredProducts.map((product) => (
            product ? (
              <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-contain"
                />
                <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            ) : null
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No products found.</p>
      )}
    </div>
  );
};

export default Products;
