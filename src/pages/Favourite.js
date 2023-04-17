import { useData } from "../api/DataContext";
import { BookCard } from "../component/BookCard";

export const Favourite = () => {
  const { favList } = useData();
  return (
    <>
      {favList.length ? (
        <ul className="card-flex">
          {favList.map((book) => (
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
      ) : (
        <h1 className="page-heading">Uh oh, your favourite list is empty!</h1>
      )}
    </>
  );
};
