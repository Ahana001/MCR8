import { useContext } from "react";
import { Card } from "../Card/Card";
import "./List.css";
import { DataContext } from "../../Context/DataContext";

export function List({ list }) {
  const { state } = useContext(DataContext);

  if (!list || !list.length) {
    return <h2>Loarding...</h2>;
  }
  let filterData = state.meetups.filter((meetup) =>
    (state.search !== "" &&
      meetup.title.toLowerCase().includes(state?.search.toLowerCase())) ||
    meetup.eventTags
      .join("")
      .toLowerCase()
      .includes(state?.search.toLowerCase())
      ? true
      : false
  );
  if (state.filterBy !== "Both") {
    filterData = filterData.filter(
      (meetup) =>
        meetup.eventType.toLowerCase() === state.filterBy.toLowerCase()
    );
  }

  return (
    <div className="ListContainer">
      {filterData.map((listItem) => {
        return <Card key={listItem.id} meetup={listItem} />;
      })}
    </div>
  );
}
