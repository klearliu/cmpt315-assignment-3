import React from "react";
import "./searchbar.style.css";
export const SearchBar = ({ placeholder, handleInput }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleInput}
  />
);
