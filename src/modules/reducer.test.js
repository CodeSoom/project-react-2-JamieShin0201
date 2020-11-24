import reducer, {
  setUsers,
} from './slice';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      users: [],
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setUsers', () => {
    it('changes users', () => {
      const initialState = {
        users: [],
      };

      const users = [
        {
          id: 1,
          email: 'test@gmail.com',
          name: '홍길동',
          phone: '010-1111-2222',
          emailReceptionYn: false,
          smsReceptionYn: false,
        },
      ];

      const state = reducer(initialState, setUsers(users));

      expect(state.users).toHaveLength(1);
    });
  });
});
