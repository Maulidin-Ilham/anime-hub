import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md px-4 py-5 flex justify-between items-center">
      <Link href={`/`}>
        <h1 className="text-xl font-semibold md:text-2xl ">
          Anime <span className="text-blue-600">Hub</span>
        </h1>
      </Link>
      <h1 className="text-lg font-medium">Github</h1>
    </div>
  );
};

export default Navbar;
