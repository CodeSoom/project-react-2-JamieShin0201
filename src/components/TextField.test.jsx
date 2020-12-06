import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  function renderTextField({
    label, type = 'text', name, value,
  } = {}) {
    return render((
      <TextField
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    ));
  }

  context('with type', () => {
    const label = '이메일';
    const type = 'email';
    const name = 'email';
    const value = '';

    it('renders label and input control', () => {
      const { queryByLabelText } = renderTextField({
        label,
        type,
        name,
        value,
      });

      expect(queryByLabelText('이메일')).not.toBeNull();
    });

    it("renders 'email' input control", () => {
      const { container } = renderTextField({
        label,
        type,
        name,
        value,
      });

      expect(container).toContainHTML('type="email"');
    });
  });

  context('without type', () => {
    const label = '전화번호';
    const name = 'phone';
    const value = '';

    it('renders label and input control', () => {
      const { queryByLabelText } = renderTextField({
        label,
        name,
        value,
      });

      expect(queryByLabelText('전화번호')).not.toBeNull();
    });

    it("renders 'text' input control", () => {
      const { container } = renderTextField({
        label,
        name,
        value,
      });

      expect(container).toContainHTML('type="text"');
    });
  });

  it('renders value', () => {
    const label = '전화번호';
    const name = 'phone';
    const value = '01011112222';

    const { getByLabelText } = renderTextField({
      label,
      name,
      value,
    });

    expect(getByLabelText('전화번호').value).toBe(value);
  });

  it('listens change event', () => {
    const label = '전화번호';
    const name = 'phone';
    const value = '01011112222';

    const { getByLabelText } = renderTextField({
      label,
      name,
    });

    fireEvent.change(getByLabelText('전화번호'), { target: { value } });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
