import React from 'react';

import styled from '@emotion/styled';

import backgroundImage from '../assets/images';

const Container = styled.div({
  margin: '0 auto',
  padding: 0,
  height: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  fontFamily: 'Black Han Sans, sans-serif',
  fontWeight: 'bold',
});

const Wrapper = styled.div({
  color: '#00acc1',
  display: 'flex',
  backgroundColor: '#FFFFFF80',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '128px',
  textShadow: '-1px 0 #FFFFFF, 0 1px #FFFFFF, 1px 0 #FFFFFF, 0 -1px #FFFFFF',
});

const Header = styled.div({
  fontSize: '32px',
  color: '#007c91',
  marginTop: '32px',
  marginLeft: '64px',
  fontFamily: '궁서',
});

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '256px',
});

const P = styled.p({
  fontSize: '48px',
  margin: '0px',
});

const Button = styled.button({
  width: '150px',
  height: '150px',
  marginRight: '256px',
  borderRadius: '50%',
  border: 'none',
  fontSize: '48px',
  backgroundColor: '#007c91',
  color: 'white',
  fontWeight: 'bold',
  outline: 'none',
  transition: 'transform 300ms ease-in',
  cursor: 'pointer',
  ': hover': {
    transform: 'scale(1.1)',
  },
});

export default function HomePage() {
  return (
    <div>
      <Container>
        <Header>
          <p>강아지 작명소</p>
        </Header>
        <Wrapper>
          <Content>
            <P>우리 강아지에게 주는 첫 선물!</P>
            <P>강아지 작명소가 도와드릴게요.</P>
          </Content>
          <Button type="button">시작</Button>
        </Wrapper>
      </Container>
    </div>
  );
}
