import React from "react";
import "./General.scss";
const Status = ({ status }) => (
  <p className="status">
    El estado del server es: <span className={`${status}`}>{status}</span>
  </p>
);

export default Status;
