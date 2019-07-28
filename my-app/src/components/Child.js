import React from "react";

function Child(props) {
  return (
    <div>
      <button onClick={() => props.buttonClick("message from child")}>
        Click Me!
      </button>
    </div>
  );
}

export default Child;
