import React from 'react';

import { render } from '@testing-library/react';

import VisitorCounts from './VisitorCounts';

import FILTERED_VISITORS_COUNT from '../../fixtures/filteredVisitorCounts';

describe('VisitorCounts', () => {
  function renderVisitorCounts(filteredVisitorCounts) {
    return render((
      <VisitorCounts filteredVisitorCounts={filteredVisitorCounts} />
    ));
  }

  context('with filteredVisitorCounts', () => {
    it('renders filteredVisitorCounts', () => {
      const { container } = renderVisitorCounts(FILTERED_VISITORS_COUNT);

      expect(container).toHaveTextContent('Today');
      expect(container).toHaveTextContent(FILTERED_VISITORS_COUNT.todayCount);
    });
  });
});
