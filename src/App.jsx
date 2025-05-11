import { useState } from "react";
import "./App.css";
import AllCards from "./components/AllCards";
import Heading from "./components/Heading";
import data from "./utils/data";

function App() {
  const [val, setval] = useState("");
  const [filterdata, setfilterdata] = useState(data);

  function Filterhand() {
    let res = data.filter((item) =>
      item.title.toLowerCase().includes(val.toLowerCase())
    );
    setfilterdata(res);
  }

  // Handle search on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      Filterhand();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Heading />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center bg-white rounded-lg shadow-md overflow-hidden">
            <input
              className="w-full sm:flex-1 p-4 text-lg text-gray-800 border-0 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              placeholder="What are you looking for?"
              value={val}
              onChange={(e) => setval(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={Filterhand}
              className="w-full sm:w-auto py-4 px-8 bg-gradient-to-r from-indigo-700 to-purple-600 text-white font-semibold transition-all duration-300 hover:from-indigo-600 hover:to-purple-500 focus:outline-none"
            >
              Search
            </button>
          </div>

          {filterdata.length === 0 && (
            <p className="text-center text-gray-600 mt-4">
              No products found matching your search.
            </p>
          )}
        </div>

        <AllCards data={filterdata} />
      </div>
    </div>
  );
}

export default App;
