import React from "react";
import {Link} from 'react-router-dom';
import Loading from "../Loading/Loading";
import {useFetchData} from '../customHooks/useFetchData';

const BookList = () => {

  const {isLoading, data} = useFetchData("app_books");

  const getShortDesc = (desc) => {
      return desc.substr(0,200) + "...";
  }

  return (
    <>
      <div>{ isLoading ? <Loading/> : ''}</div>

      {data.map((book, index) => {
        const  books  = book['books'];
        const  genreName  = book['genreName'];
        const { id, name, author, description, image } = books;

        return (
          <div key={index} className="card w-75 mx-auto p-4 my-2 ">
              <Link className="h3 text-decoration-none text-black"
                    to={`/bookList/${id}`}>
                {name}
              </Link>
            <hr />
            <div className="d-flex">
              <div className="col-md-4 ps-5">
              <img src={image} alt="picture of book" />
            </div>
              <div className="col-md-8">
            <p className="fw-semibold">
              Author:<i> {author}</i>
              <br/>
              Genre:<i> {genreName}</i>
            </p>
            <p className="mx-5">{getShortDesc(description)}</p>
            </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BookList;
