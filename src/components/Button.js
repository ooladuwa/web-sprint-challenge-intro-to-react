import React from "react";

export default function Button() {
  return (
    <button
      onClick={() => {
        const buttonDiv = document.querySelector(".buttonDiv");
        if (buttonDiv.style.display === "none") {
          buttonDiv.style.display = "block";
        } else {
          buttonDiv.style.display = "none";
        }
      }}
    >
      More Info
    </button>
  );
}
