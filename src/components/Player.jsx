import { Children } from "react";
import { useState } from "react";

function Players({ children,setName, symbol,change }) {
  // const [name, setName] = useState(children);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    setEditing((editing) => !editing);
  };

   

  let content = (
    <h6
      id="edit-name"
      className="text-warning"
      style={{ fontFamily: "cursive" }}
    >
      {children}
    </h6>
  );
  if (editing) {
    content = (
      <input
        id="edit-button"
        className="form-control bg-dark text-warning"
        type="text"
        value={children}
        onChange={(e) => setName(e.target.value)}
      />
    );
  }
  return (
    <>
      <div className="d-flex">
        <div>{content}</div>
        <h6 className="text-white ps-3">{symbol}</h6>
        <button
          onClick={handleClick}
          id="player-button"
          className="btn text-warning ms-2"
        >
          {!editing ? "Edit" : "Save"}
        </button>
      </div>
    </>
  );
}

export default Players;
