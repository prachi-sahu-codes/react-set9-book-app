import { useData } from "../api/DataContext";
import { BookCard } from "../component/BookCard";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const { books, markReadHandler, addFavHandler, favList } = useData();
  const favFind = (selectedId) =>
    favList.find((book) => book.id === selectedId);
  const navStyle = () => ({
    backgroundColor: "#7b2cbf",
    textDecoration: "none",
    fontWeight: 600,
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "0.25rem 0.5rem 0.4rem",
    margin: "0.5rem 0.26rem",
    cursor: "pointer",
    opacity: 0.95,
  });
  return (
    <>
      <h1 className="page-heading">All Books</h1>
      <ul className="card-flex">
        {books.map((book) => (
          <li key={book.id} className="card">
            <BookCard {...book} />
            <div>
              {!book.read ? (
                <button onClick={() => markReadHandler(book.id)}>
                  Mark as read
                </button>
              ) : (
                <button style={{ opacity: 0.5 }} disabled>
                  Already read
                </button>
              )}
              {favFind(book.id) ? (
                <NavLink style={navStyle} to="./fav">
                  Go to Fav
                </NavLink>
              ) : (
                <button onClick={() => addFavHandler({ ...book })}>
                  Add to Fav
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
