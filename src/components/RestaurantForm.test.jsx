import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

import CATEGORIES from '../../fixtures/categories';

describe('RestaurantForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderRestaurantForm({
    name,
    categoryId,
    address,
    phone,
    information,
  } = {}) {
    return render((
      <RestaurantForm
        categories={CATEGORIES}
        fields={{
          name,
          categoryId,
          address,
          phone,
          information,
        }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders restaurant write fields', () => {
    const { queryByLabelText } = renderRestaurantForm();

    expect(queryByLabelText('이름')).not.toBeNull();
    expect(queryByLabelText('카테고리')).not.toBeNull();
    expect(queryByLabelText('주소')).not.toBeNull();
    expect(queryByLabelText('전화번호')).not.toBeNull();
    expect(queryByLabelText('상세정보')).not.toBeNull();
  });

  it('renders values of fields', () => {
    const { queryByLabelText } = renderRestaurantForm({
      name: '김밥 천국',
      categoryId: 1,
      address: '서울시 강남구',
      phone: '01011112222',
      information: '김밥 전문점',
    });

    expect(queryByLabelText('이름').value).toBe('김밥 천국');
    expect(queryByLabelText('카테고리').value).toBe('1');
    expect(queryByLabelText('주소').value).toBe('서울시 강남구');
    expect(queryByLabelText('전화번호').value).toBe('01011112222');
    expect(queryByLabelText('상세정보').value).toBe('김밥 전문점');
  });

  it('listens change event', () => {
    const name = 'phone';
    const value = '01011112222';

    const { getByLabelText } = renderRestaurantForm();

    fireEvent.change(getByLabelText('전화번호'), { target: { value } });

    expect(handleChange).toBeCalledWith({ name, value });
  });

  it("renders '등록' button", () => {
    const { getByText } = renderRestaurantForm();

    fireEvent.click(getByText('등록'));

    expect(handleSubmit).toBeCalled();
  });
});
