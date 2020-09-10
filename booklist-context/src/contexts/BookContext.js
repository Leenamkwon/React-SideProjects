import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const [book, setBook] = useState([
    { id: 1, author: 'patrick rofuss', title: 'name of the wind' },
    { id: 2, author: 'patrick rofuss', title: 'name of the fire' },
  ]);

  const addBook = (title, author) => {
    setBook([...book, { title, author, id: uuidv4() }]);
  };

  const removeBook = (id) => {
    setBook(book.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ book, add: addBook, remove: removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};
