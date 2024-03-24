import React from "react";
import github from "../../src/imgs/github.png";

export default function Footer() {
  const footerStyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    color: "white",
    textAlign: "center",
  };

  const gitImg = {
    marginLeft: "1vh",
    width: "4vh",
  };
  return (
    <div className="text-center p-3 bg-dark" style={footerStyle}>
      <footer>
        © 2024 Adi Shcherbakov. All rights reserved to Adi Shcherbakov.
        <a href="https://github.com/MrCIause">
          <img src={github} style={gitImg}></img>
        </a>
      </footer>
    </div>
  );
}
