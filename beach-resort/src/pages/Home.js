import React from 'react';

import { Link } from 'react-router-dom';

import Hero from '../components/resumable/Hero';
import Banner from '../components/resumable/Banner';
import Services from '../components/Services';
import FeatureRoom from '../components/FeatureRoom';

/* Context */
// import { RoomContext } from '../contexts/rootContext';

const Home = () => {
  return (
    <>
      <Hero hero='defaultHero'>
        <Banner
          title='럭셔리 룸'
          subtitle='최저가 룸이 299달러 부터 시작합니다'
        >
          <Link to='/rooms' className='btn-primary'>
            룸 둘러보기
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRoom />
    </>
  );
};

export default Home;
