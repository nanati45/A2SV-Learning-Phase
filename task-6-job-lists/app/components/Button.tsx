import React from "react";
interface Text {
  text: string;
  bg?: string;
  border?: string;
  color?: string;
}
const Button = ({ text, bg, border, color }: Text) => {
  return (
    <button className={`${bg} ${color} ${border} rounded-3xl px-4 p-1 m-1`}>
      {text}
    </button>
  );
};

export default Button;
