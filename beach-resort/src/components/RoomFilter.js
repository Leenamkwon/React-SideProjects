import React, { useContext } from 'react';
import { RoomContext } from '../contexts/rootContext';

import Title from '../components/Title';

const getUniqe = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomFilter = () => {
  const context = useContext(RoomContext);
  const {
    rooms,
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // get unique type
  let types = getUniqe(rooms, 'type');
  types = ['all', ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUniqe(rooms, 'capacity');
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor='type'>원하는 방을 선택해주세요</label>
          <select
            className='form-control'
            name='type'
            id='type'
            value={type}
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
      </form>
    </section>
  );
};

export default RoomFilter;
