import React from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const bookData = useLoaderData();
  // console.log(bookData);
  return (
    <div className="space-y-12">
      <Banner></Banner>
      <Books bookData={bookData}></Books>
    </div>
  );
};

export default Home;
