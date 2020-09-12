import React from 'react';
import Room from '../components/resumable/Room';

const RoomList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className='empty-search'>
        <h3>필터링 결과가 없습니다.</h3>
      </div>
    );
  }
  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {rooms.map((item) => {
          return <Room key={item.id} info={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomList;
