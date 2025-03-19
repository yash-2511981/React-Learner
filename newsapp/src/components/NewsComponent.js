import React, { Component } from "react";

export default class NewsComponent extends Component {
  render() {
    const { author, title, description, image, url,state} = this.props;
    return (
      <div>
        <div className={`card bg-${state.bg} text-${state.color} shadow-lg`} style={{ width: "18rem" }}>
          <img
            src={image ? image : "https://via.placeholder.com/286x160"}
            className="card-img-top"
            alt="..."
            style={{ height: "130px", objectFit: "cover" }}
          />
          <div
            className="card-body"
            style={{
              height: "230px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h6
              className="card-title my-0"
              style={{
                height: "60px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
              }}
            >
              {!title ? "Click on read to know more": title.slice(0,35)}...
            </h6>
            <p
              className="card-text"
              style={{
                height: "40px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "6",
                WebkitBoxOrient: "vertical",
                flex: "1",
              }}
            >
              {!description ? "Click on read to know more":description.slice(0,50)}...
            </p>
            <p className="text-end">-{!author ? "Unknown":author.slice(0,15)}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-sm btn-${state.btn} mt-auto`}
            >
              Read
            </a>
          </div>
        </div>
      </div>
    );
  }
}
