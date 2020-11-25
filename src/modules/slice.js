import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers } from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    users: [],
  },
  reducers: {
    setUsers(state, { payload: users }) {
      return {
        ...state,
        users,
      };
    },
  },
});

export const {
  setUsers,
} = actions;

export function loadUsers() {
  return async (dispatch) => {
    const users = await fetchUsers();
    dispatch(setUsers(users));
  };
}

export default reducer;
