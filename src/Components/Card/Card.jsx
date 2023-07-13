import { Link } from "react-router-dom";
import "./Card.css";
import { convertToIST } from "../../utils";

export function Card({
  meetup: { eventStartTime, title, eventType, eventThumbnail, id },
}) {
  return (
    <Link className="CardContainer" to={`/event/${id}`}>
      <div className="CardImageContainer">
        <div className="EventType">{eventType} Event</div>
        <img src={eventThumbnail} alt={title} />
      </div>
      <div className="EventTime">{convertToIST(eventStartTime)} IST</div>
      <div className="EventName">{title}</div>
    </Link>
  );
}
