import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("profile");
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <div className="bg-black flex justify-between	items-center h-24  mx-auto px-4 text-white mb-16">
      <h1 className=" text-3xl font-bold text-[#00df9a]">
        <Link to={"/"}>CITY INFORMATION</Link>
      </h1>

      <ul className="hidden md:flex">
        <Link
          to={"/form"}
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black font-bold"
        >
          {user ? (
            <button onClick={handleClick}>logout</button>
          ) : (
            <p> Login / SignUp</p>
          )}
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
