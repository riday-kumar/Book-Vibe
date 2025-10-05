import React from "react";
import Book from "../../components/Book/Book";

const Books = ({ bookData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {bookData.map((data, index) => (
        <Book key={index} data={data}></Book>
      ))}
    </div>
  );
};

export default Books;
