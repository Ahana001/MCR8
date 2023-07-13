import "./SingleEventPage.css";

import { useContext } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { DataContext } from "../../Context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { convertToIST } from "../../utils";
import { SpeakerCard } from "../../Components/SpeakerCard/SpeakerCard";

export function SingleEventPage() {
  const { id } = useParams();
  const navigator = useNavigate();
  const { state } = useContext(DataContext);
  const findEvent = state.meetups.find((meetup) => meetup.id === id);
  if (!findEvent) {
    return navigator("/404");
  }
  return (
    <div className="SingleEventPageContainer">
      <Navbar />
      <div className="HorizontalLine"></div>
      <div className="SinglePageContent">
        <div className="LeftSingleEventPage">
          <h1>{findEvent?.title}</h1>
          <div className="HostedDetails">
            <div className="HostedBy">Hosted By:</div>
            <div className="HostedByName">{findEvent?.hostedBy}</div>
          </div>
          <img src={findEvent?.eventThumbnail} alt={findEvent?.title} />
          <div className="DetailsHeader">Details:</div>
          <div className="Description">{findEvent?.eventDescription}</div>
          <div className="AdditionaDetails">
            <h2>Additional Information:</h2>
            <div>
              <span>Dress Code:</span>{" "}
              {findEvent?.additionalInformation?.dressCode}
            </div>
            <div>
              <span>Age Restrictions:</span>
              {findEvent?.additionalInformation?.ageRestrictions}
            </div>
          </div>
          <div className="EventTags">
            {findEvent.eventTags.map((tag) => {
              return <button key={tag}>{tag}</button>;
            })}
          </div>
        </div>
        <div className="RightSingleEventPage">
          <div className="TimePlaceDetails">
            <div className="TimeDetails">
              <BiTimeFive />
              <div>
                {convertToIST(findEvent?.eventStartTime)} {" to "} <br />
                {convertToIST(findEvent?.eventEndTime)}
              </div>
            </div>
            {findEvent?.address !== "" ? (
              <div className="PlaceDetails">
                <GrLocation />
                <div>{findEvent?.address}</div>
              </div>
            ) : null}
            {findEvent.isPaid && <div>Rs. {findEvent.price}</div>}
          </div>
          <div className="Speakers">
            <h2>Speakers: ({findEvent?.speakers?.length})</h2>
            <div className="SpeakerList">
              {findEvent.speakers.map((speaker) => {
                return <SpeakerCard key={speaker.name} speaker={speaker} />;
              })}
            </div>
          </div>
          <div className="RVPContainer">
            <button>{findEvent?.isRVP ? "Already RVP" : "RVP"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
