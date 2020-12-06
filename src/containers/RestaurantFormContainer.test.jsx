import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantFormContainer from './RestaurantFormContainer';

import CATEGORIES from '../../fixtures/categories';

jest.mock('react-redux');

describe('RestaurantFormContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantFormContainer() {
    return render((
      <RestaurantFormContainer />
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories: CATEGORIES,
      restaurantFields: {
        name: '김밥 천국',
        categoryId: 1,
        address: '서울시 강남구',
        phone: '01011112222',
        information: '김밥 전문점',
      },
    }));
  });

  it('renders input controls', () => {
    const { getByLabelText } = render((
      <RestaurantFormContainer />
    ));

    expect(getByLabelText('이름').value).toBe('김밥 천국');
    expect(getByLabelText('카테고리').value).toBe('1');
  });

  it('listens change event', () => {
    const { getByLabelText } = renderRestaurantFormContainer();

    fireEvent.change(getByLabelText('이름'), {
      target: { value: '김밥 나라' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'application/changeRestaurantFields',
      payload: { name: 'name', value: '김밥 나라' },
    });
  });

  it("renders '등록' button", () => {
    const { getByText } = renderRestaurantFormContainer();

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalled();
  });
});
