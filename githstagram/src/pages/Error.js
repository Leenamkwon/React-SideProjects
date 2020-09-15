import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>안타깝네요, 이 페이지에서는 아무것도 찾을 수 없습니다. </h3>
        <Link to='/'>메인 페이지로 돌아가기</Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Error;
