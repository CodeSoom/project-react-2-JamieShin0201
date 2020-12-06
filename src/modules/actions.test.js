import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import {
  loadUsers,
  loadCategories,
  loadRestaurants,
  loadVisitorCounts,
  setUsers,
  setCategories,
  setRestaurants,
  setVisitorCounts,
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

  describe('loadVisitorCounts', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setVisitorCounts', async () => {
      await store.dispatch(loadVisitorCounts());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setVisitorCounts([]));
    });
  });
});
