import React from 'react';

import {
  MemoryRouter,
} from 'react-router-dom';

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
      restaurants: [],
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('방문자 수');
    });
  });

  context('with path /users', () => {
    it('renders the restaurants page', () => {
      const { container } = renderApp({ path: '/users' });

      expect(container).toHaveTextContent('회원이 없습니다.');
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('식당이 없습니다.');
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/invalid' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
