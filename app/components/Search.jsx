import React from "react";

const Search = () => {
  return (
    <div className="mt-4 flex justify-center items-center px-4 ">
      <form action="" className=" rounded-md w-full   ">
        <input
          type="text"
          placeholder="Search Anime..."
          className="w-full  rounded placeholder:text-gray-500 outline-none bg-[#44444c] px-2 py-2 text-white"
        />
      </form>
    </div>
  );
};

export default Search;
