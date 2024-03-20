import React from "react";

const Card = ({ item }) => {
  return (
    <div className="block w-[30%] bg-[white] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <a href="#!">
        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
          alt=""
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight  text-neutral-800 ">
          {item.title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 ">{item.message}</p>

        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  bg-blue-500"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
