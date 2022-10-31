import React from "react";
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import BookList from "./BookList";
import Book from "./Book";

const BooksApp = () => {
  return <>
      <BrowserRouter>
      <Routes>
          <Route path="/bookList" element={<BookList/>} />
        <Route path="/bookList/:id" element={<Book/>}/>
      </Routes>
    </BrowserRouter >
    </>
};

export default BooksApp;
