import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export const useFilterDataHook = () => {
  const { state } = useContext(DataContext);

  let filteredSnacks = state.snacks;

  return filteredSnacks;
};
