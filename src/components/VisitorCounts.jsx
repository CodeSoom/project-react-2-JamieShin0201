import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  width: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFF',
  borderRadius: '16px',
  marginTop: '2em',
  '& h3': {
    width: '100%',
    fontSize: '1.5em',
    borderBottom: '2px solid #eceff1',
    padding: '0.5em 0',
    margin: 0,
  },
  '& p': {
    fontSize: '2em',
    fontWeight: 'bold',
  },
});

export default function VisitorCounts({ filteredVisitorCounts }) {
  const {
    todayCount,
    yesterdayCount,
    weekCount,
    monthCount,
  } = filteredVisitorCounts;

  return (
    <>
      <Container>
        <h3>Today</h3>
        <p>{todayCount}</p>
      </Container>
      <Container>
        <h3>Yesterday</h3>
        <p>{yesterdayCount}</p>
      </Container>
      <Container>
        <h3>Week</h3>
        <p>{weekCount}</p>
      </Container>
      <Container>
        <h3>Month</h3>
        <p>{monthCount}</p>
      </Container>
    </>
  );
}
