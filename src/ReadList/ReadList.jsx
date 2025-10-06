import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBooks } from "../Utility/AddToDB";
import Book from "../components/Book/Book";
import WishList from "../WishList/WishList";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();

  // console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBooks();
    console.log(storedBookData);
    // const convertedStoredBooks = storedBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      storedBookData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }
    if (sortType === "ratings") {
      const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRating);
    }
  };

  return (
    <div>
      <div>
        <details className="dropdown">
          <summary className="btn btn-success btn-lg m-1">
            Sort By : {sort ? sort : ""}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("pages")}>Sort By Page Number</a>
            </li>
            <li>
              <a onClick={() => handleSort("ratings")}>Sort By Rating</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList className="font-bold">
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          {readList.map((b, index) => (
            <Book key={index} data={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <WishList></WishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
