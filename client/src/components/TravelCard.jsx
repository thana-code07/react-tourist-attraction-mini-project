import React from "react";

const TravelCard = ({ travel }) => {
  const { title, url, description, photos, tags } = travel;
  return (
    <div className="flex">
      <img src={photos[0]} alt={title} className="w-[]" />
      <div className="content">
        <h2>
          <a href={url}>{title}</a>
        </h2>
        <p>{description}</p>
        <p>{tags}</p>
        <div className="subImageContainer">
          {photos.slice(1).map((photo) => (
            <img src={photo} alt={title} key={photo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelCard;