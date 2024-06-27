import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ setApiData }) {
  const [tempData, setTempData] = useState("");

  function callApi(query) {
    const apiKey = "44643495-aefc71c78b7cd1b7eaae6733b";
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data.hits || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setApiData([]);
      });
  }

  const handleChange = (e) => {
    const query = e.target.value;
    setTempData(query);
    callApi(query);
  };

  const handleClick = () => {
    callApi(tempData);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search Image Term"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
