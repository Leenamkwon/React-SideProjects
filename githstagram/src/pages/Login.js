import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div className='container'>
        <img src={loginImg} alt='login-img' />
        <h3>깃허브 사용자들을 환영합니다</h3>
        <p>깃 레포지토리의 모든 것을 그래프별로 확인하실 수 있어요</p>
        <button className='btn' onClick={loginWithRedirect}>
          로그인 / 회원가입
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
