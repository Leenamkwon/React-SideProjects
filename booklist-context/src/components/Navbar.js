import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { book } = useContext(BookContext);

  return (
    <div className='navbar'>
      <h1>Ninja Reading List</h1>
      <p>Currently you have {book.length} books to get through...</p>
    </div>
  );
};

export default Navbar;
