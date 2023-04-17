import { useData } from "../api/DataContext";
import { BookCard } from "../component/BookCard";

export const Read = () => {
  const { books } = useData();
  const readBooks = books.filter((book) => book.read === true);
  return (
    <>
      <ul className="card-flex">
        {readBooks.map((book) => (
          <li key={book.id} className="card">
            <BookCard {...book} />

            <p>
              <span style={{ fontWeight: "600" }}>Year: </span>
              {book.year}
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Price: </span>${book.price}
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Publisher: </span>
              {book.publisher}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
