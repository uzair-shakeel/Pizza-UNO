import React, { useState, useEffect, useRef } from "react";
import { HiChevronDown } from "react-icons/hi";
import axios from "axios";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const dropdownRef = useRef(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/category/");
      setData(response.data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowDropdown(true);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleItemClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm(category);
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onClick={() => setShowDropdown(true)}
        placeholder="Search categories..."
        className="w-full px-4 py-2 rounded-md bg-white border border-[#19a140] outline-none placeholder:text-black"
      />
      <div
        className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
        onClick={toggleDropdown}
      >
        <HiChevronDown className="h-5 w-5 text-gray-400 cursor-pointer" />
      </div>
      {showDropdown && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg">
          {data.map((item) => (
            <div
              key={item._id}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleItemClick(item.category)}
            >
              {item.category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
