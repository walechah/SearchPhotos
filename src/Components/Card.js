import React from "react";
import "./Card.css";

export default function Card({ ApiData }) {
  return (
    <div className="cards-container">
      {ApiData.length > 0 ? (
        ApiData.map((data) => (
          <div key={data.id} className="card">
            <div className="img">
              {data.userImageURL && <img src={data.userImageURL} alt="" />}
            </div>
            <div className="items">
              <div className="content">
                <p>
                  <b>Photo by</b> : {data.user || "Unknown User"}
                </p>
                <p>
                  <b>Views</b> : {data.views || 0}
                </p>
                <p>
                  <b>Downloads</b> : {data.downloads || 0}
                </p>
                <p>
                  <b>Likes</b> : {data.likes || 0}
                </p>
              </div>
              <div className="hashtags">
                {data.tags &&
                  data.tags.split(", ").map((tag, index) => (
                    <p key={index}>{tag}</p>
                  ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}