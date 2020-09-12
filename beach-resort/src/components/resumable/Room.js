import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../images/room-1.jpeg';

const Room = ({ info }) => {
  const { name, slug, images, price } = info;

  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} alt='images' />
        <div className='price-top'>
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className='btn-primary room-link'>
          구경 하기
        </Link>
      </div>
      <p className='room-info'>{name}</p>
    </article>
  );
};

export default Room;
