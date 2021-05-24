import React from "react";

const Button = ({ btn_title, btn_func }) => {
  return <button onClick={() => btn_func()}>{btn_title}</button>;
};

export default Button;
