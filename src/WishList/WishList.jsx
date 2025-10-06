import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { storedWishList } from "../Utility/AddtoWishList";
import Book from "../components/Book/Book";

const WishList = () => {
  const [wishList, setWishList] = useState([]);

  const wishData = useLoaderData();
  //   console.log(wishData);
  useEffect(() => {
    const storedWishListData = storedWishList();

    const getStoredWishListData = storedWishListData.map((id) => Number(id));
    const showWishList = wishData.filter((singleData) =>
      getStoredWishListData.includes(singleData.bookId)
    );
    console.log(getStoredWishListData);
    setWishList(showWishList);
  }, []);
  return (
    <div>
      {wishList.map((wishBook, index) => (
        <Book key={index} data={wishBook}></Book>
      ))}
    </div>
  );
};

export default WishList;
