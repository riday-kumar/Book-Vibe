import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utility/AddToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { addToWishList } from "../../Utility/AddtoWishList";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();

  const getAllBooks = useLoaderData();

  const findBook = getAllBooks.find(
    (singleBook) => singleBook.bookId === Number(id)
  );
  // console.log(findBook);

  const handleMarkAsRead = (id) => {
    // store with id
    // where to store
    // array or collection
    // if book is exists, show a alert
    // if book not exist then push in the collection or array

    addToStoredDB(id);
  };

  const handleWishList = (id) => {
    addToWishList(id);
  };

  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="bg-gray-200 rounded-lg flex justify-center items-center">
        <img className=" h-[500px] rounded-lg" src={findBook.image} alt="" />
      </div>
      <div className="space-y-5">
        <h1 className="text-4xl font-bold">{findBook.bookName}</h1>
        <p className="text-2xl font-medium">{findBook.author}</p>
        <hr className="border border-dashed border-gray-200 mt-3" />
        <p className="text-2xl font-medium">{findBook.category}</p>
        <hr className="border border-dashed border-gray-200 mt-3" />
        <p className="font-medium">
          <span className="font-bold">Review</span>
          {findBook.review}
        </p>
        <div className="flex items-center gap-5">
          <p className="font-bold">Tag</p>
          {findBook.tags.map((tag, tagid) => (
            <div key={tagid} className="badge badge-soft badge-success">
              {tag}
            </div>
          ))}
        </div>
        <hr className="border border-dashed border-gray-200 mt-3" />
        <p>
          Number of Pages:{" "}
          <span className="font-bold">{findBook.totalPages}</span>
        </p>
        <p>
          Publisher: <span className="font-bold">{findBook.publisher}</span>
        </p>
        <p>
          Year of Publishing:{" "}
          <span className="font-bold">{findBook.yearOfPublishing}</span>
        </p>
        <p>
          Rating: <span className="font-bold">{findBook.rating}</span>
        </p>
        <div className="flex gap-5">
          <button
            onClick={() => handleMarkAsRead(findBook.bookId)}
            className="btn btn-info"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleWishList(findBook.bookId)}
            className="btn btn-accent"
          >
            Add to WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
