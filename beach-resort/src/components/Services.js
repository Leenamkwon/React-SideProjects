import React from 'react';
import Title from './Title';

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

const Services = () => {
  const services = {
    services: [
      {
        icon: <FaCocktail />,
        title: '무료 칵테일',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi obcaecati quod velit maxime tempora necessitatibus ex ab tenetur reprehenderit veniam.',
      },
      {
        icon: <FaHiking />,
        title: '하이킹을 즐겨보세요',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi obcaecati quod velit maxime tempora necessitatibus ex ab tenetur reprehenderit veniam.',
      },
      {
        icon: <FaShuttleVan />,
        title: '가는 곳 마다 편하게! 무료 셔틀버스',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi obcaecati quod velit maxime tempora necessitatibus ex ab tenetur reprehenderit veniam.',
      },
      {
        icon: <FaBeer />,
        title: '하루의 마무리는 깔끔한 맥주로',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi obcaecati quod velit maxime tempora necessitatibus ex ab tenetur reprehenderit veniam.',
      },
    ],
  };

  return (
    <section className='services'>
      <Title title='services' />
      <div className='services-center'>
        {services.services.map((item, index) => {
          return (
            <article key={index} className='service'>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
