import { useCallback, useState } from "react";

const Counter = ({ parentCallback }) => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount((count) => count + 1);
        parentCallback(count + 1);
      }}
    >
      increment
    </button>
  );
};

export default Counter;