export const BookCard = ({ id, title, author, image, read }) => {
  return (
    <>
      <img src={image} alt={title} className="card-img" />

      <p>
        <span style={{ fontWeight: "600" }}>Title: </span>
        {title}
      </p>
      <p>
        <span style={{ fontWeight: "600" }}>Author: </span>
        {author}
      </p>
    </>
  );
};
