import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div className="infoBarr">
      <div className="leftInnerContainer">
        <h3>
          currenty chatting :{" "}
          <span role="img" aria-label="emoji">
            💬
          </span>
          <span> </span>
          {users.length}
        </h3>
      </div>
    </div>
    {users ? (
      <div>
        <div className="activeContainer">
          <p>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </p>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
