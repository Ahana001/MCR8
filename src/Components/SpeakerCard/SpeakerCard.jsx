import "./SpeakerCard.css";

export function SpeakerCard({ speaker: { name, image, designation } }) {
  return (
    <div className="SpeakerCardContainer">
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{designation}</div>
    </div>
  );
}
