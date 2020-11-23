import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import ResultPage from './ResultPage';

jest.mock('../assets/images');

describe('ResultPage', () => {
  context('with result', () => {
    it('renders result', () => {
      const { container } = render((
        <MemoryRouter>
          <ResultPage />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('당신의 강아지에게 딱 어울리는 이름은?');
    });
  });
});
