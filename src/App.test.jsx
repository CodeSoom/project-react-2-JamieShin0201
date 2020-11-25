import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      users: [],
    }));
  });

  it("renders 'Eatgo Admin'", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Eatgo Admin');
  });
});
