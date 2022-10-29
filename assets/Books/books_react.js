import React from 'react';
import ReactDOM from 'react-dom/client';
import BooksApp from './BooksApp';

const root = ReactDOM.createRoot(document.getElementById('all_books'));
root.render(<React.StrictMode>
    <BooksApp/>
</React.StrictMode>);