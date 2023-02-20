import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  token: "",
  leads: [],
};

const TableContext = createContext();

export default function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = { state, dispatch };
  return (
    <TableContext.Provider value={store}>{children}</TableContext.Provider>
  );
}

export const useEmployees = () => {
  return useContext(TableContext);
};
