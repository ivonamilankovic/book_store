import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import BookList from "./BookList";

import Routing from "../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min";
const routes = require("../routes.json");
Routing.setRoutingData(routes);

const BooksApp = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBooks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(Routing.generate("app_books"));
      const data = await response.json();
      setBooks(JSON.parse(data));
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <BookList books={books} />;
};

export default BooksApp;
