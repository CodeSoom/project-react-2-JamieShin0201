import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantForm from '../components/RestaurantForm';

import {
  loadCategories,
  changeRestaurantFields,
  addRestaurant,
} from '../modules/slice';

import { get } from '../modules/utils';

export default function RestaurantFormContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const categories = useSelector(get('categories'));
  const restaurantFields = useSelector(get('restaurantFields'));

  function handleChange({ name, value }) {
    dispatch(changeRestaurantFields({ name, value }));
  }

  function handleSubmit() {
    dispatch(addRestaurant());
  }

  return (
    <RestaurantForm
      categories={categories}
      fields={restaurantFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
