import { useContext } from "react";
import "./Navbar.css";

import { AiOutlineSearch } from "react-icons/ai";
import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/DataReducer";

export function Navbar() {
  const { dispatch } = useContext(DataContext);

  return (
    <div className="NavbarContainer">
      <div className="LeftNavbarItems">
        <h1>Meetups</h1>
      </div>
      <div className="RightNavbarItems">
        <div className="SearcBoxContainer">
          <AiOutlineSearch className="SearchIcon" />
          <input
            placeholder="Search by event title and tags"
            onChange={(e) => {
              dispatch({
                type: ActionTypes.SET_SEARCH,
                payload: { search: e.target.value },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
