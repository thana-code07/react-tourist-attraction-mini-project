import "./App.css";
import Search from "@/components/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import TravelCard from "./components/TravelCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [travelInfo, setTravelInfo] = useState([]);

  const getTravelData = async (searchTerm) => {
    try {
      const response = await axios.get(
        searchTerm
          ? `http://localhost:4001/trips?keywords=${searchTerm}`
          : `http://localhost:4001/trips?keywords=`,
      );
      console.log(response.data.data);
      setTravelInfo(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTravelData(searchTerm);
  }, [searchTerm]);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center text-blue-500 mt-2 p-3">
        เที่ยวไหนดี
      </h1>
      <div className="flex justify-center px-4 mt-6">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="px-4 mt-6">
        {travelInfo.map((travel) => (
          <TravelCard key={travel.eid} travel={travel} />
        ))}
      </div>
    </div>
  );
}

export default App;
