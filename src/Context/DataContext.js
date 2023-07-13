import { createContext, useEffect, useReducer } from "react";
import { ActionTypes, DataReducer, initialState } from "../Reducer/DataReducer";
import { meetups } from "../Data/Data";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  useEffect(() => {
    dispatch({
      type: ActionTypes.INITIAL_SET,
      payload: { meetups: meetups.meetups },
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
