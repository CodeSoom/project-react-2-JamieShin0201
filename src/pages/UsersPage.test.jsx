import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import UsersPage from './UsersPage';

import USERS from '../../fixtures/users';

jest.mock('react-redux');

describe('UsersPage', () => {
  const dispatch = jest.fn();

  function renderUsersPage() {
    return render((
      <UsersPage />
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      users: given.users,
    }));
  });

  context('with users', () => {
    given('users', () => (USERS));

    it('renders users', () => {
      const { container } = renderUsersPage();

      USERS.forEach((user) => {
        const {
          email, name, phone, emailReceptionYn, smsReceptionYn,
        } = user;

        expect(container).toHaveTextContent(email);
        expect(container).toHaveTextContent(name);
        expect(container).toHaveTextContent(phone);
        expect(container).toHaveTextContent(emailReceptionYn ? 'Y' : 'N');
        expect(container).toHaveTextContent(smsReceptionYn ? 'Y' : 'N');
      });
    });
  });

  context('without users', () => {
    given('users', () => ([]));
    it('renders no users message', () => {
      const { container } = renderUsersPage();

      expect(container).toHaveTextContent('회원이 없습니다.');
    });
  });
});
