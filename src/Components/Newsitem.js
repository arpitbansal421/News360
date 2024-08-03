import React, { Component } from "react";
import PropTypes from "prop-types";

const Newsitem = (props) => {
  let { title, description, imageurl, newsurl, author, date } = props;
  return (
    <div className="container my-3">
      {
        <div className="card">
          <img
            src={
              !imageurl
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1280px-BBC_News_2022_%28Alt%29.svg.png"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 45) : ""}..</h5>{" "}
            <p className="card-text">
              {description ? description.slice(0, 88) : ""}...
            </p>
            <p class="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl ? newsurl : ""}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      }
    </div>
  );
};

export default Newsitem;
