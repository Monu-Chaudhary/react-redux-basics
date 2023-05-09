import { useReducer, useState } from "react";

// const buyIcecream = () => {
//   return {
//     type: "BuyIcecream"
//   };
// };

function reducer(state, action) {
  switch (action.type) {
    case "BuyIcecream":
      return {
        numIcecream: state.numIcecream - 1
      };
    // default:
    //   return {
    //     numIcecream: 0
    //   }
  }
}
export default function ReactRedux() {
  const initialState = {
    numIcecream: 10
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p> Number of Icecream using ReactRedux</p>
      <button onClick={() => dispatch({ type: "BuyIcecream" })}>
        Buy Icecream
      </button>
      <p>{state.numIcecream}</p>
    </>
  );
}
