import React, { useContext } from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import Loading from '../components/resumable/Loading';

import { RoomContext } from '../contexts/rootContext';

const RoomContainer = () => {
  const context = useContext(RoomContext);
  console.log(context);
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      Room Containersdasd
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};

export default RoomContainer;
