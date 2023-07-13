import "./Navbar.css";

import { AiOutlineSearch } from "react-icons/ai";

export function Navbar() {
  return (
    <div className="NavbarContainer">
      <div className="LeftNavbarItems">
        <h1>Meetups</h1>
      </div>
      <div className="RightNavbarItems">
        <div className="SearcBoxContainer">
          <AiOutlineSearch className="SearchIcon" />
          <input placeholder="Search by event title and tags" />
        </div>
      </div>
    </div>
  );
}
