import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <strong>Gold</strong>, your ultimate destination for incredible deals on electronics, fashion, and more. 
          We focus on delivering high-quality products at unbeatable prices, complemented by exceptional customer service.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Our goal is simple: to create a smooth and enjoyable shopping experience. From browsing our online store to receiving your items, 
          we aim to make each step seamless and stress-free. We collaborate with trusted suppliers to offer the latest trends and the best deals.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          What makes us different is our unwavering commitment to customer satisfaction. Whether you're looking for the latest gadgets or trendy fashion, 
          our team is ready to assist you. With quick shipping, secure payments, and dedicated customer support, we ensure you have the best possible experience.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Thank you for choosing <strong>Gold</strong>. We're thrilled to be your go-to shopping partner and deliver top-quality products every day!
        </p>
      </div>
    </div>
  );
};

export default About;
