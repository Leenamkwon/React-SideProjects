import React, { useContext } from 'react';
import { RoomContext } from '../contexts/rootContext';

import Title from '../components/Title';

const RoomFilter = () => {
  const context = useContext(RoomContext);
  const {
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
  return <div>hello from room filter</div>;
};

export default RoomFilter;
