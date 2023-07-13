import { Card } from "../Card/Card";
import "./List.css";

export function List({ list }) {
  if (!list || !list.length) {
    return <h2>Loarding...</h2>;
  }
  return (
    <div className="ListContainer">
      {list.map((listItem) => {
        return <Card key={listItem.id} meetup={listItem} />;
      })}
    </div>
  );
}
