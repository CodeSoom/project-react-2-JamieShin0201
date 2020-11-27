import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import VisitorCountsContainer from './VisitorCountsContainer';

import VISITOR_COUNTS from '../../fixtures/visitorCounts';

jest.mock('react-redux');

describe('VisitorCountsContainer', () => {
  const dispatch = jest.fn();

  function renderVisitorCountsContainer() {
    return render((
      <VisitorCountsContainer />
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      visitorCounts: given.visitorCounts,
    }));
  });

  context('with visitorCounts', () => {
    given('visitorCounts', () => (VISITOR_COUNTS));

    it('renders visitorCounts chart', () => {
      const { container } = renderVisitorCountsContainer();

      expect(container).toHaveTextContent('방문자 수');
    });
  });

  context('without visitorCounts', () => {
    given('visitorCounts', () => ([]));

    it('renders no visitorCounts message', () => {
      const { container } = renderVisitorCountsContainer();

      expect(container).toHaveTextContent('방문자 수가 없습니다.');
    });
  });
});
