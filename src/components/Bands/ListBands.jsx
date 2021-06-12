import React, { useContext, useEffect, useState } from "react";
import SocketContext from "../../context/SocketContext";
import "./Bands.scss";
const ListBands = () => {
  const { socket } = useContext(SocketContext);
  const [bands, setBands] = useState([]);
  useEffect(() => {
    socket.on("current-bands", (data) => {
      setBands(data);
    });
    return () => socket.off("current-bands");
  }, [socket]);

  // cambio de nombre en el input
  const handleChangeName = (e, id) => {
    const { value } = e.target;
    setBands((bands) =>
      bands.map((band) => {
        if (band.id === id) {
          band.name = value;
        }
        return band;
      })
    );
  };

  // cambio de nombre en el socket
  const handleOnBlur = (name, id) => socket.emit("change-name", { id, name });

  // acccion votar en socket
  const handleOnClick = (id) => socket.emit("accion-votar", id);

  // accion delete en socket
  const handleDelete = (id) => socket.emit("action-delete", id);
  const createRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td className="item">
          <button className="votebtn" onClick={() => handleOnClick(band.id)}>
            +1
          </button>
        </td>
        <td className="item">
          <input
            placeholder="nombre de la banda"
            className="inputName"
            value={band.name}
            onChange={(e) => handleChangeName(e, band.id)}
            onBlur={() => handleOnBlur(band.name, band.id)}
          />
        </td>
        <td className="item">
          <p className="votes">{band.votes}</p>
        </td>
        <td className="item">
          <button className="deletebtn" onClick={() => handleDelete(band.id)}>
            delete
          </button>
        </td>
      </tr>
    ));
  };
  return (
    <>
      <table className="tableBands">
        <thead className="thead">
          <tr>
            <th className="headitem"></th>
            <th className="headitem">Nombre</th>
            <th className="headitem">Votos</th>
            <th className="headitem">Borrar</th>
          </tr>
        </thead>
        <tbody className="tbody">{createRows()}</tbody>
      </table>
    </>
  );
};

export default ListBands;
