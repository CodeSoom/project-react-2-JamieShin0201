import React from 'react';

import TextField from './TextField';

export default function RestarauntForm({
  categories, fields, onChange, onSubmit,
}) {
  const {
    name,
    categoryId,
    address,
    phone,
    information,
  } = fields;

  function handleChange(event) {
    const { target } = event;
    onChange(target);
  }

  return (
    <div>
      <TextField
        tag="input"
        label="이름"
        name="name"
        type="text"
        value={name}
        onChange={onChange}
      />

      <label htmlFor="restaurant-category">
        카테고리
      </label>
      <select
        id="restaurant-category"
        name="categoryId"
        value={categoryId}
        onChange={handleChange}
      >
        {categories.map(
          (category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ),
        )}
      </select>

      <TextField
        tag="input"
        label="주소"
        name="address"
        type="text"
        value={address}
        onChange={onChange}
      />

      <TextField
        tag="input"
        label="전화번호"
        name="phone"
        type="text"
        value={phone}
        onChange={onChange}
      />

      <label htmlFor="information">
        상세정보
      </label>
      <textarea
        id="information"
        name="information"
        value={information}
        onChange={handleChange}
      />

      <button
        type="button"
        onClick={onSubmit}
      >
        등록
      </button>
    </div>
  );
}
