import React from "react";

function Card(props) {
    return (
      <div className="tiles" onClick={props.onCardClick}>
        <img src={props.image} alt="cat pic" />
      </div>
    );
  }

  export default Card;