import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [userData, setUserData] = useState({});
  const [favList, setFavList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/books");

      if (response.status === 200) {
        setBooks(response.data.books);
        setUserData(response.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const markReadHandler = (selectedId) => {
    const newData = books.map((book) =>
      book.id === selectedId ? { ...book, read: !book.read } : book
    );
    setBooks(newData);
  };

  const readCount = books.reduce(
    (acc, book) => (book.read === true ? acc + 1 : acc),
    0
  );

  const addFavHandler = (selectedBook) => {
    const isItemPresent = favList.findIndex(
      (items) => items.id === selectedBook.id
    );
    if (isItemPresent === -1) {
      setFavList((favList) => [...favList, { ...selectedBook }]);
    } else {
      setFavList((favList) => [...favList]);
    }
  };

  return (
    <DataContext.Provider
      value={{
        books,
        userData,
        favList,
        markReadHandler,
        addFavHandler,
        readCount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
