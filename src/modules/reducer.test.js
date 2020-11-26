import reducer, {
  setUsers,
  setRestaurants,
} from './slice';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      users: [],
      restaurants: [],
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

  describe('setRestaurants', () => {
    it('changes restaurnsts', () => {
      const initialState = {
        restaurnsts: [],
      };

      const restaurants = [
        {
          id: 1,
          categoryId: 1,
          name: '김밥 천국',
          address: '서울 강남구 역삼동',
          phone: '02-1111-2222',
          information: '김밥 전문점',
        },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });
});
