import { useState } from "react";

const SearchBox = ({ changeFilter }) => {
  function handleChange(evt) {
    changeFilter(evt.target.value);
  }

  return (
    <label htmlFor="">
      Find contacts by name
      <input onChange={handleChange} type="text" />
    </label>
  );
};

export default SearchBox;
