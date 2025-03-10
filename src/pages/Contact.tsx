import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-12 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Get in Touch</h2>
      <p className="text-gray-700 text-center mb-8">
        Have any questions or concerns? Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-800 font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="John"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-800 font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-gray-800 font-medium mb-1">Message</label>
          <textarea
            placeholder="How can we help you?"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
