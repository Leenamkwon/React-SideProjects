import React from 'react';

import { Link } from 'react-router-dom';

import Hero from '../components/resumable/Hero';
import Banner from '../components/resumable/Banner';

const Error = () => {
  return (
    <Hero className='defaultHero'>
      <Banner title='404' subtitle='요청하신 페이지를 찾을 수 없습니다.'>
        <Link to='/' className='btn-primary'>
          메인으로 돌아가기
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
