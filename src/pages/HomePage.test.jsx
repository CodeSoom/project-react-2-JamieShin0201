import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

jest.mock('../assets/images');

describe('HomePage', () => {
  it('renders header, content, button', () => {
    const { container, queryByText } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('강아지 작명소');
    expect(container).toHaveTextContent('우리 강아지에게 주는 첫 선물!');
    expect(container).toHaveTextContent('강아지 작명소가 도와드릴게요.');

    expect(queryByText('시작')).not.toBeNull();
  });
});
