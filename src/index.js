import { StrictMode, createContext } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export const TreeContext = createContext(); // create a context so that the data is accessible to all the componenets without having to pass data along the components tree

const trees = [
  { id: 1, val: "Oak" },
  { id: 2, val: "Maple" },
  { id: 3, val: "Neem" },
  { id: 4, val: "Tulsi" }
];

root.render(
  <StrictMode>
    <TreeContext.Provider value={trees}>
      <App />
    </TreeContext.Provider>
  </StrictMode>
);
