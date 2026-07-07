import React from "react";

const TravelCard = ({ travel }) => {
  const { title, url, description, photos, tags } = travel;
  const shortDescription = description.slice(0, 100);
  return (
    <div className="flex w-full ">
      <img src={photos[0]} alt={title} className="w-[30%]" />
      <div className="content">
        <h2>
          <a href={url}>{title}</a>
        </h2>
        <p className="flex flex-col">
          {shortDescription}{" "}
          <a href={url} className="text-blue-500 underline hover:text-blue-700">
            อ่านต่อ...
          </a>
        </p>
        <p>
          หมวด{" "}
          <span className="underline">
            {tags.slice(0, tags.length - 1).join(" ")}
          </span>{" "}
          และ <span className="underline">{tags[tags.length - 1]}</span>
        </p>
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
