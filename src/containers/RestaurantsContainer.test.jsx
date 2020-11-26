import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import RESTAURANTS from '../../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantsContainer() {
    return render((
      <RestaurantsContainer />
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
      const { container } = renderRestaurantsContainer();

      RESTAURANTS.forEach((restaurants) => {
        const {
          name, address, phone, information,
        } = restaurants;

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
      const { container } = renderRestaurantsContainer();

      expect(container).toHaveTextContent('식당이 없습니다.');
    });
  });
});
