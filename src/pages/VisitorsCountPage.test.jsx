import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import VisitorCountsPage from './VisitorCountsPage';

import VISITORCOUNTS from '../../fixtures/visitorCounts';

jest.mock('react-redux');

describe('VisitorCountsPage', () => {
  const dispatch = jest.fn();

  function renderVisitorCountsPage() {
    return render((
      <VisitorCountsPage />
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
    given('visitorCounts', () => (VISITORCOUNTS));

    it('renders visitorCounts chart', () => {
      const { container } = renderVisitorCountsPage();

      expect(container).toHaveTextContent('방문자 수');
    });
  });

  context('without visitorCounts', () => {
    given('visitorCounts', () => ([]));
    it('renders no visitorCounts message', () => {
      const { container } = renderVisitorCountsPage();

      expect(container).toHaveTextContent('방문자 수가 없습니다.');
    });
  });
});