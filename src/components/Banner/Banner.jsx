import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-around items-center py-16 bg-[#1313130d] rounded-lg">
      <div>
        <h1 className="text-6xl font-bold leading-[84px]">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className="btn btn-lg btn-success mt-5 font-bold">
          View The List
        </button>
      </div>
      <div>
        <img src="https://i.ibb.co.com/4ZCh8qqN/pngwing-1.png" alt="book" />
      </div>
    </div>
  );
};

export default Banner;
