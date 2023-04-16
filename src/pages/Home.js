import { useData } from "../api/DataContext";
import { BookCard } from "../component/BookCard";

export const Home = () => {
  const { books } = useData();

  return (
    <>
      <h2>All Books</h2>
      <ul className="card-flex">
        {books.map((book) => (
          <li key={book.id} className="card">
            <BookCard {...book} />
          </li>
        ))}
      </ul>
    </>
  );
};
