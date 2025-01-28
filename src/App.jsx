import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Head from "./components/Head";
import GameBody from "./components/GameBody";
import GameBoard from "./components/GameBoard";

function App() {
  const [valid, setValid] = useState();
  return (
    <>
      <Head />
      <GameBody />

      {/* <input
        type="text"
        className={`btn btn-${valid ? "danger" : "warning"}`}
      />
      <button className="btn " onClick={() => setValid("sheik")}>
        {" "}
        click
      </button> */}
    </>
  );
}

export default App;
