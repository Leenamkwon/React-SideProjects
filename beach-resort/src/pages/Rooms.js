import React from 'react';

import { Link } from 'react-router-dom';

import Hero from '../components/resumable/Hero';
import Banner from '../components/resumable/Banner';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner
          title='비치 리솔트만의 다양한 방들'
          subtitle='비치 리솔트와 함께 당신의 여행을 더욱 더 신나게 즐기세요'
        >
          <Link to='/' className='btn-primary'>
            메인으로 돌아가기
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;
