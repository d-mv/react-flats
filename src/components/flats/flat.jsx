import React from "react";

import classes from "./flat.scss";

const Flat = props => {
  const handleClick = () => {
    props.selectFlat([props.flat.lat, props.flat.lng])
  }
  return (
    <div
      className="card"
      onClick={handleClick}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${
          props.flat.imageUrl
        })`
      }}
    >
      <div className="card-category">{props.flat.price}</div>
      <div className="card-description">
        <h2>{props.flat.name}</h2>
      </div>
      <a className="card-link" href="#" />
    </div>
  );
};

export default Flat;
