import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers, fetchRestaurants } from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    users: [],
    restaurants: [],
  },
  reducers: {
    setUsers(state, { payload: users }) {
      return {
        ...state,
        users,
      };
    },
    setRestaurants(state, { payload: restaurants }) {
      return {
        ...state,
        restaurants,
      };
    },
  },
});

export const {
  setUsers,
  setRestaurants,
} = actions;

export function loadUsers() {
  return async (dispatch) => {
    const users = await fetchUsers();
    dispatch(setUsers(users));
  };
}

export function loadRestaurants() {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants();
    dispatch(setRestaurants(restaurants));
  };
}

export default reducer;
