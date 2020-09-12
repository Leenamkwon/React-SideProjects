import React, { useContext, useEffect, useState } from 'react';
import { RoomContext } from '../contexts/rootContext';
import { Link } from 'react-router-dom';
import Hero from '../components/resumable/Hero';
import Banner from '../components/resumable/Banner';

const SingleRoom = ({ match }) => {
  const context = useContext(RoomContext);
  const { getRoom } = context;

  const [slug] = useState(match.params.rooms);
  const [roomDetail, setRoomDetail] = useState('');

  useEffect(() => {
    const room = getRoom(slug);
    setRoomDetail(room);
  }, [slug, getRoom]);

  /* 맞지 않을 경우 */
  if (!roomDetail) {
    return (
      <div className='error'>
        <h3>현재 룸을 찾으실 수 없습니다.</h3>
        <Link to='/rooms' className='btn-primary'>
          이전 페이지로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <Hero hero='roomsHero'>
      <Banner title={`${roomDetail.name}`}>
        <Link to='/rooms' className='btn-primary'>
          back to rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default SingleRoom;
