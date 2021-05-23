import React, { useEffect, useState } from "react";

const Input = ({ change_func, value }) => {
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type to search products..."
        onChange={(e) => change_func(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Input;
