import React, { useState } from "react";

export const CounterComponent: React.FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>title</h1>
      <p>That's my counter: {counter}</p>
    </div>
  );
};
