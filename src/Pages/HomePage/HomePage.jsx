import "./HomePage.css";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

export function HomePage() {
  const { state, dispatch } = useContext(DataContext);
  return <h2>Home</h2>;
}
