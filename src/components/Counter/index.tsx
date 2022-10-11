import React, { useState } from "react";

export const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>That's my counter: {counter}</p>
    </div>
  );
};
