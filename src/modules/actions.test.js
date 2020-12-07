import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import {
  loadUsers,
  loadCategories,
  loadRestaurants,
  loadAllVisitorCounts,
  setUsers,
  setCategories,
  setRestaurants,
  setVisitorCounts,
  setFilteredVisitorCounts,
} from './slice';

const middlewares = getDefaultMiddleware();
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('actions', () => {
  let store;

  describe('loadCategories', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setCategories', async () => {
      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories([]));
    });
  });

  describe('loadUsers', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setUsers', async () => {
      await store.dispatch(loadUsers());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setUsers([]));
    });
  });

  describe('loadRestaurants', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setRestaurants', async () => {
      await store.dispatch(loadRestaurants());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurants([]));
    });
  });

  describe('loadAllVisitorCounts', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setVisitorCounts and setFilteredVisitorCounts', async () => {
      await store.dispatch(loadAllVisitorCounts());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setVisitorCounts([]));
      expect(actions[1]).toEqual(setFilteredVisitorCounts([]));
    });
  });
});
