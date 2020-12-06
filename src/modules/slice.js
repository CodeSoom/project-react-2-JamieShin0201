import { createSlice } from '@reduxjs/toolkit';

import {
  fetchUsers,
  fetchCategories,
  fetchRestaurants,
  fetchVisitorCounts,
  // postRestaurant,
} from '../services/api';

const initialRestaurantFields = {
  name: '',
  categoryId: 1,
  address: '',
  phone: '',
  information: '',
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    users: [],
    categories: [],
    restaurants: [],
    visitorCounts: [],
    restaurantFields: {
      ...initialRestaurantFields,
    },
  },
  reducers: {
    setUsers(state, { payload: users }) {
      return {
        ...state,
        users,
      };
    },
    setCategories(state, { payload: categories }) {
      return {
        ...state,
        categories,
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
    changeRestaurantFields(state, { payload: { name, value } }) {
      return {
        ...state,
        restaurantFields: {
          ...state.restaurantFields,
          [name]: value,
        },
      };
    },
    clearRestaurantFields(state) {
      return {
        ...state,
        restaurantFields: {
          ...initialRestaurantFields,
        },
      };
    },
  },
});

export const {
  setUsers,
  setCategories,
  setRestaurants,
  setVisitorCounts,
  changeRestaurantFields,
  clearRestaurantFields,
} = actions;

export function loadUsers() {
  return async (dispatch) => {
    const users = await fetchUsers();
    dispatch(setUsers(users));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
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

export function addRestaurant() {
  return async (dispatch, getState) => {
    const {
      restaurants,
      restaurantFields:
      {
        name,
        categoryId,
        address,
        phone,
        information,
      },
    } = getState();

    const nextId = restaurants[restaurants.length - 1].id;
    // await postRestaurant({
    //   name,
    //   categoryId,
    //   address,
    //   phone,
    //   information,
    // });
    dispatch(setRestaurants([...restaurants, {
      nextId,
      name,
      categoryId,
      address,
      phone,
      information,
    }]));
    dispatch(clearRestaurantFields());
  };
}

export default reducer;
