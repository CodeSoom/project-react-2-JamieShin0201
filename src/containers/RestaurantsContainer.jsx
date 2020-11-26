import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from '../modules/slice';

import { get } from '../modules/utils';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  const restaurants = useSelector(get('restaurants'));

  if (!restaurants || restaurants.length === 0) {
    return (
      <p>식당이 없습니다.</p>
    );
  }
  return (
    <ul>
      {restaurants.map(({
        id, name, address, phone, information,
      }) => (
        <li key={id}>
          {name}
          {address}
          {phone}
          {information}
        </li>
      ))}
    </ul>
  );
}
