import React, { useContext } from 'react';
import { RoomContext } from '../contexts/rootContext';

import Loading from '../components/resumable/Loading';
import Room from '../components/resumable/Room';
import Title from './Title';

const FeatureRoom = () => {
  const context = useContext(RoomContext);
  const { featuredRooms, loading } = context;

  const renderFE = featuredRooms.map((room) => (
    <Room key={room.id} info={room} />
  ));

  return (
    <section className='featured-rooms'>
      <Title title='featured rooms' />
      <div className='featured-rooms-center'>
        {loading ? <Loading /> : renderFE}
      </div>
    </section>
  );
};

export default FeatureRoom;
