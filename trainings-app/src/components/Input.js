import React from "react";

function Input({ value, onChange }) {
  return (
    <input
      class="inputCreate"
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  );
}

export default Input;
