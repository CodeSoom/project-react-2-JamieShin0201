import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadUsers } from '../modules/slice';

import { get } from '../modules/utils';

export default function UsersContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const users = useSelector(get('users'));

  if (!users || users.length === 0) {
    return (
      <p>회원이 없습니다.</p>
    );
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.email}
          {user.name}
          {user.phone}
          {user.emailReceptionYn ? 'Y' : 'N'}
          {user.smsReceptionYn ? 'Y' : 'N'}
        </li>
      ))}
    </ul>
  );
}
