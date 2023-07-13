import "./HomePage.css";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { Navbar } from "../../Components/Navbar/Navbar";
import { filterOptions } from "./constants";
import { List } from "../../Components/List/List";

export function HomePage() {
  const { state } = useContext(DataContext);

  return (
    <div className="HomePageContainer">
      <Navbar />
      <div className="HorizontalLine"></div>
      <div className="ListHeader">
        <h1>Meetup Events</h1>
        <select className="SelectFiters" defaultValue={state.filterBy}>
          {filterOptions.map((filterOption) => {
            return (
              <option
                key={filterOption}
                value={filterOption}
                disabled={filterOption === filterOptions[2]}
              >
                {filterOption === filterOptions[2]
                  ? "Select Event Type"
                  : filterOption}
              </option>
            );
          })}
        </select>
      </div>
      <List list={state?.meetups} />
    </div>
  );
}
