import React from "react";
import "./style.css";

import Child from "Child";

export default function App() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Add Child</button>
      {Array(count).fill(null).map((_, index) => <Child key={index} a="3" b="5" c="7" d="9">
        <b>Child HTML of Component</b>
      </Child>)}
    </div>
  );
}
