import React, { useContext } from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import Loading from '../components/resumable/Loading';

import { RoomContext } from '../contexts/rootContext';

const RoomContainer = () => {
  const context = useContext(RoomContext);
  let { loading, sortedRooms, rooms, type, capacity } = context;

  if (type !== 'all') {
    sortedRooms = sortedRooms.filter((room) => room.type === type);
  }

  if (parseInt(capacity) !== 1) {
    sortedRooms = sortedRooms.filter((room) => parseInt(room.capacity) > 1);
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};

export default RoomContainer;
