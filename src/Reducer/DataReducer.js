export const ActionTypes = {
  INITIAL_SET: "INITIAL_SET",
  SET_SEARCH: "SET_SEARCH",
  SET_FILTER: "SET_FILTER",
};
export const initialState = {
  meetups: [],
  filterBy: "Both",
  search: "",
};

export function DataReducer(state, action) {
  let result;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionTypes.INITIAL_SET: {
      const updatedMeetups = action.payload.meetups.map((meetup) => ({
        ...meetup,
        isRVP: false,
      }));
      result = {
        ...state,
        meetups: updatedMeetups,
      };
      break;
    }
    case ActionTypes.SET_SEARCH: {
      result = {
        ...state,
        search: action.payload.search,
      };
      break;
    }
    case ActionTypes.SET_FILTER: {
      result = {
        ...state,
        filterBy: action.payload.filterBy,
      };
      break;
    }
  }
  return result;
}
