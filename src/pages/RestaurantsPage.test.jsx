import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

import RESTAURANTS from '../../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  function renderRestaurantsPage() {
    return render((
      <RestaurantsPage />
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: given.restaurants,
    }));
  });

  context('with restaurants', () => {
    given('restaurants', () => (RESTAURANTS));

    it('renders restaurants', () => {
      const { container } = renderRestaurantsPage();

      RESTAURANTS.forEach((restaurant) => {
        const {
          name, address, phone, information,
        } = restaurant;

        expect(container).toHaveTextContent(name);
        expect(container).toHaveTextContent(address);
        expect(container).toHaveTextContent(phone);
        expect(container).toHaveTextContent(information);
      });
    });
  });

  context('without restaurants', () => {
    given('restaurants', () => ([]));
    it('renders no restaurants message', () => {
      const { container } = renderRestaurantsPage();

      expect(container).toHaveTextContent('식당이 없습니다.');
    });
  });
});
