import React from "react";
import { Link } from "react-router";

const Book = ({ data }) => {
  return (
    <Link to={`/bookDetails/${data.bookId}`}>
      <div className="card bg-base-100 shadow-sm">
        <figure className="py-7 m-3 bg-[#f3f3f3]">
          <img className="w-32 h-48 rounded-xl" src={data.image} alt="" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            {data.tags.map((tag, tagid) => (
              <div key={tagid} className="badge badge-soft badge-success">
                {tag}
              </div>
            ))}

            {/* <div className="badge badge-soft badge-success">Success</div> */}
          </div>
          <h2 className="card-title font-bold">{data.bookName}</h2>
          <p className="font-medium">By : {data.author}</p>
          <hr className="border border-dashed border-gray-200 mt-3" />
          <div className="flex justify-between items-center font-medium">
            <p>{data.category}</p>
            <div className="flex justify-between items-center gap-2">
              <p>{data.rating}</p>
              <p>⭐</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
