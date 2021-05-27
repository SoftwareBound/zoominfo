import React from "react";
import "../../style.css";

const Button = ({ btn_title, btn_func }) => {
  return (
    <div>
      <button
        className="btn btn-outline-secondary button"
        onClick={() => btn_func()}
      >
        {btn_title}
      </button>
    </div>
  );
};

export default Button;
