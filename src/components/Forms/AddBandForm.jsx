import React, { useContext, useState } from "react";
import SocketContext from "../../context/SocketContext";
import "./Forms.scss";
const AddBandForm = () => {
  const { socket } = useContext(SocketContext);
  const [value, setValue] = useState("");
  const HandleOnSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      return;
    }
    socket.emit("add-band", { name: value });
    setValue("");
  };
  return (
    <form className="form" onSubmit={HandleOnSubmit}>
      <div className="wrapperInput">
        <label htmlFor="BandName" className="label">
          Nombre de la banda
        </label>
        <input
          type="text"
          placeholder="ingresa el nombre de la banda"
          className="inputText"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default AddBandForm;
