import React from "react";

function ListsAndKeys() {
  const names = ["ABC", "DEF", "Hello", "Hi"];
  return (
    <div>
      {names.map((name, index) => (
        <h2 key={index}>
          {index}
          {name}
        </h2>
      ))}
    </div>
  );
}

export default ListsAndKeys;
