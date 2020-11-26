import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import {
  loadRestaurants,
  loadUsers,
  setRestaurants,
  setUsers,
} from './slice';

const middlewares = getDefaultMiddleware();
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('actions', () => {
  let store;

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
});
