import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetail = ({ book }) => {
  const { remove } = useContext(BookContext);
  return (
    <li onClick={() => remove(book.id)}>
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
    </li>
  );
};

export default BookDetail;
