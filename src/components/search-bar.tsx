import React from "react";

import { FaSearch } from "react-icons/fa";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between w-full border px-4 rounded-md">
      <FaSearch />
      <Input
        placeholder="Search or Start a new chat"
        className="border-none outline-none focus-visible:ring-0 
       focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default SearchBar;
