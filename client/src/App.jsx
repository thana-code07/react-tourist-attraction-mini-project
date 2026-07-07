import Search from "./components/Search";

import { useEffect, useState } from "react";

import axios from "axios";

import TravelCard from "./components/TravelCard";
import { useDebounce } from "react-use";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [travelInfo, setTravelInfo] = useState([]);

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const getTravelData = async (searchTerm) => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${searchTerm}`,
      );

      setTravelInfo(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTagClick = (tag) => {
    const keywords = searchTerm.trim().split(/\s+/).filter(Boolean);
    if (keywords.includes(tag)) {
      return;
    } else {
      setSearchTerm(keywords.length > 0 ? `${keywords.join(" ")} ${tag}` : tag);
    }
  };

  useEffect(() => {
    getTravelData(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-accent-blue mt-6 mb-4">
          เที่ยวไหนดี
        </h1>

        <div className="flex justify-center mt-4">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <hr className="border-[#DDDDDD] mt-6" />

        <div className="flex flex-col gap-8 py-6">
          {travelInfo.map((travel) => (
            <TravelCard
              key={travel.eid}
              travel={travel}
              onTagClick={handleTagClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
