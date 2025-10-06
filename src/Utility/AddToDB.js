import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const getStoredBooks = () => {
  const storedBookStr = localStorage.getItem("readList");

  if (storedBookStr) {
    const storedBookData = JSON.parse(storedBookStr);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBooks();

  if (storedBookData.includes(id)) {
    alert("this book already exists");
  } else {
    storedBookData.push(id);
    const strBookData = JSON.stringify(storedBookData);
    localStorage.setItem("readList", strBookData);

    MySwal.fire({
      title: "success",
      text: "You have successfully added to the read list",
      icon: "success",
    });
  }
};

export { addToStoredDB, getStoredBooks };
