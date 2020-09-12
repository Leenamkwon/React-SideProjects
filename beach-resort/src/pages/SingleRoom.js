import React, { useContext, useEffect, useState } from 'react';
import { RoomContext } from '../contexts/rootContext';
import { Link } from 'react-router-dom';
import Hero from '../components/resumable/Hero';
import Banner from '../components/resumable/Banner';
import StyledHero from '../styledComponent/StyleHero';

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
    <>
      <StyledHero img={roomDetail.images[0]}>
        <Banner title={`${roomDetail.name}`}>
          <Link to='/rooms' className='btn-primary'>
            이전 페이지로 돌아가기
          </Link>
        </Banner>
      </StyledHero>
      <section className='single-room'>
        <div className='single-room-images'>
          {roomDetail.images.slice(1).map((item, index) => {
            return <img src={item} key={index} alt={roomDetail.name} />;
          })}
        </div>
        <div className='single-room-info'>
          <article className='desc'>
            <h3>디테일</h3>
            <p>{roomDetail.description}</p>
          </article>
          <article className='info'>
            <h3>정보</h3>
            <h6>가격 : {roomDetail.price}달러</h6>
            <h6>사이즈 : {roomDetail.size} SQFT</h6>
            <h6>최대 수용 : {roomDetail.capacity}명</h6>
            <h6>{roomDetail ? '동물 가능' : '동물 불가능'}</h6>
            <h6>{roomDetail.breakfast && '음식물 반입 가능'}</h6>
          </article>
        </div>
      </section>
      <section className='room-extras'>
        <h6>제공</h6>
        <ul className='extras'>
          {roomDetail.extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
