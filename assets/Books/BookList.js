import React from "react";

const BookList = ({ books }) => {
  return (
    <>
      {books.map((book, index) => {
        const  data  = book['data'];
        const  genreName  = book['genreName'];
        const {  name, author, description, price, releasedYear, image , pageNumber } = data;

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
            <div className="d-flex">
              <div className="col-md-4 ps-5">
              <img src="https://api.lorem.space/image/book?w=150&h=220" alt="picture of book" />
            </div>
              <div className="col-md-8">
            <p className="fw-semibold">
              Author:<i> {author}</i>
              <br/>
              Genre:<i> {genreName}</i>
            </p>
            <p className="mx-5">{description}</p>
            </div>
            </div>
            <hr />
            <div className="text-end">
              <small className="d-block text-muted">
                Published: year {releasedYear}.
              </small>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BookList;
