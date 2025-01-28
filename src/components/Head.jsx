import png from "../assets/pngwing.com.png";

export default function Head() {
  return (
    <>
      <header>
        <img id="head-img" className="mb-2" src={png} alt="logo" />
        <h2
          className="mt-3"
          style={{ fontFamily: "cursive", fontWeight: "800" }}
        >
          Tic-Toc-Toe
        </h2>
      </header>
    </>
  );
}
