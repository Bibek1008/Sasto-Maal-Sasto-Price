import React from "react";

const AllCards = ({ data }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
        {data.map((singlevalue) => (
          <div
            key={singlevalue.id}
            className="bg-gradient-to-br from-purple-600 to-indigo-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="p-4">
              <img
                src={singlevalue.thumbnail}
                alt={singlevalue.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-white mb-2 truncate">
                {singlevalue.title}
              </h2>
              <p className="text-white text-lg font-semibold mb-2">
                ₹ {singlevalue.price + 700}
              </p>
              <p className="text-white text-sm opacity-70 line-clamp-3">
                {singlevalue.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCards;
