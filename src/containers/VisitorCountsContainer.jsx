import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadVisitorCounts } from '../modules/slice';

import { get } from '../modules/utils';

import VisitorCountsChart from '../components/VisitorCountsChart';

export default function VisitorCountsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadVisitorCounts());
  }, []);

  const visitorCounts = useSelector(get('visitorCounts'));

  if (!visitorCounts || visitorCounts.length === 0) {
    return (
      <p>방문자 수가 없습니다.</p>
    );
  }

  return (
    <div>
      <h1>방문자 수</h1>
      <VisitorCountsChart visitorCounts={visitorCounts} />
    </div>
  );
}
