import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [userData, setUserData] = useState({});

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

  return (
    <DataContext.Provider value={{ books, userData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
