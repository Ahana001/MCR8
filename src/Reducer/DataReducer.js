export const ActionTypes = {
  INITIAL_SET: "INITIAL_SET",
};
export const initialState = {
  meetups: [],
  filterBy: "Both",
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
  }
  return result;
}
