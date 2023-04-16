export const BookCard = ({ id, title, author, image, read }) => {
  return (
    <>
      <img src={image} alt={title} className="card-img" />

      <p>
        <span>Title: </span>
        {title}
      </p>
      <p>
        <span>Author: </span>
        {author}
      </p>
    </>
  );
};
