import React, {useState} from "react";

export const NumberButton = (props) => {
  return (
    <button>
      {props.number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
