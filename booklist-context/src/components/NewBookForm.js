import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
  const { add } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        add(title, author);
        setTitle('');
        setAuthor('');
      }}
    >
      <input
        type='text'
        placeholder='book title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='book author'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type='submit' value='add book' />
    </form>
  );
};

export default NewBookForm;
