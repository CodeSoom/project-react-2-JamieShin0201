import React from 'react';

import styled from '@emotion/styled';

import results from '../data/results';

const Container = styled.div({
  margin: '0 auto',
  padding: 0,
  width: '80%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  fontFamily: 'Black Han Sans, sans-serif',
  fontWeight: 'bold',
  backgroundColor: '#007c9190',
  borderRadius: '32px',
});

const Header = styled.div({
  textAlign: 'center',
  fontSize: '32px',
  color: '#007c91',
  fontFamily: '궁서',
});

const Wrapper = styled.div({
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '128px',
  '& p': {
    textAlign: 'center',
    fontSize: '48px',
    marginTop: '16px',
  },
});

export default function ResultPage() {
  return (
    <div>
      <Container>
        <Header>
          <p>당신의 강아지에게 딱 어울리는 이름은?</p>
        </Header>
        <Wrapper>
          <p>{results[0].name}</p>
          <p>{results[0].description}</p>
        </Wrapper>
      </Container>
    </div>
  );
}
