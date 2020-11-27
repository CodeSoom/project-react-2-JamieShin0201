import { createSlice } from '@reduxjs/toolkit';

import {
  fetchUsers,
  fetchRestaurants,
  fetchVisitorCounts,
} from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    users: [],
    restaurants: [],
    visitorCounts: [],
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
    setVisitorCounts(state, { payload: visitorCounts }) {
      return {
        ...state,
        visitorCounts,
      };
    },
  },
});

export const {
  setUsers,
  setRestaurants,
  setVisitorCounts,
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

export function loadVisitorCounts() {
  return async (dispatch) => {
    const visitorCounts = await fetchVisitorCounts();
    dispatch(setVisitorCounts(visitorCounts));
  };
}

export default reducer;
