import React from "react";

const Search = () => {
  return (
    <div className="mt-4 flex justify-center items-center px-4">
      <form
        action=""
        className="border-2 border-gray-200 rounded-md w-full px-2 py-1"
      >
        <input
          type="text"
          placeholder="Search Anime..."
          className="w-full py-1 placeholder:text-gray-500 outline-none"
        />
      </form>
    </div>
  );
};

export default Search;
