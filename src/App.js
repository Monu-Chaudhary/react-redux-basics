import "./styles.css";
import { useState, useEffect, useReducer, useRef, useContext } from "react";

import useInput from "./useInput";
import { TreeContext } from "./index";
import FetchData from "./fetchData";
import ReactRedux from "./reactRedux";

function reducer(state, action) {
  switch (action.type) {
    case "happy":
      return {
        message: `${state.message}! I am Happy`
      };
    case "elated":
      return {
        message: `${state.message}! I feel Elated`
      };
    default:
      return {
        message: `${state.message}! I am blessed`
      };
  }
}

export default function App() {
  const [count, setCount] = useState(0);
  const [seconds, setSecond] = useState(0);
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );
  const initialState = { message: "hi" };
  const [state, dispatch] = useReducer(reducer, initialState);
  const name = useRef();

  const [titleProps, resetTitle] = useInput("");

  const trees = useContext(TreeContext);

  useEffect(() => {
    // setTimeout(() => {
    setSecond((seconds) => seconds + 1);
    // console.log(seconds);
    // }, "1000");
  }, [number]);

  const submit = function (e) {
    e.preventDefault();
    const newName = name.current.value;
    alert(`New name is ${newName}`);
    name.current.value = "";
  };

  const submitTitle = function (e) {
    e.preventDefault();
    alert(`The title is ${titleProps.value}.`);
    resetTitle();
  };

  return (
    <>
      <FetchData username="Monu-Chaudhary" />

      <p>Trees List using useContext Hook</p>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.val}</li>
        ))}
      </ul>

      <div className="App">
        <form onSubmit={submitTitle}>
          <p>Process input using Custom Hook</p>
          <input type="text" {...titleProps} />
        </form>

        <p>Process input using useRef Hook</p>
        <form onSubmit={submit}>
          <input ref={name} type="text" placeholder="name"></input>
          <button>ADD</button>
        </form>

        <p>Counter function using useState Hook</p>
        <button onClick={() => setCount((count) => count + 1)}>{count}</button>

        <p>Increment {number} by 2 using useReducer Hook</p>
        <button onClick={() => setNumber(2)}>{number}</button>

        <p>
          Recording the number change to above value using useEffect Hook:{" "}
          {seconds}
        </p>

        <p>useReducer Hook</p>
        <p>{state.message}</p>
        <button onClick={() => dispatch({ type: "happy" })}>Happy Mode</button>
        <button onClick={() => dispatch({ type: "elated" })}>
          Elated Mode
        </button>
      </div>
      <ReactRedux />
    </>
  );
}
