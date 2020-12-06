import reducer, {
  setUsers,
  setCategories,
  setRestaurants,
  setVisitorCounts,
  changeRestaurantFields,
  clearRestaurantFields,
} from './slice';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      users: [],
      categories: [],
      restaurants: [],
      visitorCounts: [],
      restaurantFields: {
        name: '',
        categoryId: 1,
        address: '',
        phone: '',
        information: '',
      },
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

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
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

  describe('setVisitorCounts', () => {
    it('changes visitorCounts', () => {
      const initialState = {
        visitorCounts: [],
      };

      const visitorCounts = [
        {
          date:
          {
            year: 2020,
            month: 11,
            day: 26,
            hour: 9,
            min: 55,
          },
          count: 700,
        },
      ];

      const state = reducer(initialState, setVisitorCounts(visitorCounts));

      expect(state.visitorCounts).toHaveLength(1);
    });
  });

  describe('changeRestaurantFields', () => {
    it('changes a field of restaurant', () => {
      const initialState = {
        name: '',
        categoryId: 1,
        address: '',
        phone: '',
        information: '',
      };

      const state = reducer(
        initialState,
        changeRestaurantFields({ name: 'name', value: '롤링파스타' }),
      );

      expect(state.restaurantFields.name).toBe('롤링파스타');
    });
  });

  describe('clearRestaurantFields', () => {
    it('clears fields of restaurant', () => {
      const initialState = {
        name: 'NAME',
        categoryId: 2,
        address: 'ADDRESS',
        phone: 'PHONE',
        information: 'INFORMATION',
      };

      const state = reducer(initialState, clearRestaurantFields());

      expect(state.restaurantFields.name).toBe('');
      expect(state.restaurantFields.categoryId).toBe(1);
    });
  });
});
