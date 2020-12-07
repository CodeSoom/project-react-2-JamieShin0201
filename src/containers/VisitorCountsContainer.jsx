import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { isEmpty } from 'lodash';

import {
  loadAllVisitorCounts,
} from '../modules/slice';

import { get } from '../modules/utils';

import VisitorCountsChart from '../components/VisitorCountsChart';
import VisitorCounts from '../components/VisitorCounts';

const Container = styled.div({
  width: '90%',
  height: '60%',
  backgroundColor: '#FFF',
  borderRadius: '16px',
  margin: '0 auto',
});

const Wrapper = styled.div({
  width: '90%',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 auto',
});

export default function VisitorCountsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllVisitorCounts());
  }, []);

  const visitorCounts = useSelector(get('visitorCounts'));
  const filteredVisitorCounts = useSelector(get('filteredVisitorCounts'));

  if (isEmpty(visitorCounts)) {
    return (
      <p>방문자 수가 없습니다.</p>
    );
  }

  return (
    <>
      <h1>방문자 수</h1>
      <Container>
        <VisitorCountsChart visitorCounts={visitorCounts} />
      </Container>
      <Wrapper>
        <VisitorCounts filteredVisitorCounts={filteredVisitorCounts} />
      </Wrapper>
    </>
  );
}
