import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface CartProps {
  cartItems: Product[];
  removeFromCart: (id: number) => void;  // Function to remove an item from the cart
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="mt-4 text-gray-600">No items in the cart yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {cartItems.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-lg relative">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-32 object-contain"
              />
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}  // Remove item on click
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
