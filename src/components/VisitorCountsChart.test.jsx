import React from 'react';

import { render } from '@testing-library/react';

import VisitorCountsChart from './VisitorCountsChart';

import VISITORS_COUNT from '../../fixtures/visitorCounts';

describe('VisitorCountsChart', () => {
  function renderVisitorCountsChart(visitorCounts) {
    return render((
      <VisitorCountsChart visitorCounts={visitorCounts} />
    ));
  }

  context('with visitorCounts', () => {
    it('renders visitorCounts chart', () => {
      renderVisitorCountsChart(VISITORS_COUNT);
    });
  });
});
