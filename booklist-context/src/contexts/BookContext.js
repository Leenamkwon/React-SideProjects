import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducer/bookReducer';

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const [book, dispatch] = useReducer(bookReducer, [], () => {
    console.log('hi');
    const localData = localStorage.getItem('books');
    return localData !== null ? JSON.parse(localStorage.getItem('books')) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(book));
  }, [book]);

  return (
    <BookContext.Provider value={{ book, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
