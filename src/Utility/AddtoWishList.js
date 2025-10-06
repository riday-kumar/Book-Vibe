import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const storedWishList = () => {
  const getStoredWishList = localStorage.getItem("wishList");

  if (getStoredWishList) {
    const storedWishedBooks = JSON.parse(getStoredWishList);
    return storedWishedBooks;
  } else {
    return [];
  }
};

const addToWishList = (id) => {
  const getPreviousWishList = storedWishList();

  if (getPreviousWishList.includes(id)) {
    alert("this book is already included in the WishList");
  } else {
    getPreviousWishList.push(id);

    const strAllWishList = JSON.stringify(getPreviousWishList);
    localStorage.setItem("wishList", strAllWishList);
    // console.log(strAllWishList);
    MySwal.fire({
      title: "success",
      text: "You have successfully added to the wish list",
      icon: "success",
    });
  }
};

export { addToWishList, storedWishList };
