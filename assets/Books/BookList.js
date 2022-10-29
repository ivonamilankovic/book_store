import React from "react";

const BookList = ({ books }) => {
  return (
    <>
      {books.map((book, index) => {
        const { id, name, author, description, price, released_year } = book;
        return (
          <div key={index} className="card w-75 mx-auto p-4 my-2">
            <div className="d-flex justify-content-between mt-2">
              <a className="h3 text-decoration-none text-black" href="#">
                {name}
              </a>
              <div className="p-2 rounded d-inline text-warning fst-italic fw-bold">
                ${price}
              </div>
            </div>
            <hr />
            <h5>Author: {author}</h5>
            <p className="mx-5">{description} </p>
            <hr />
            <div className="text-end">
              <small className="d-block text-muted">
                Published:{released_year}
              </small>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BookList;
