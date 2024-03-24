import React from "react";
import { Outlet, Link } from "react-router-dom";
import adoptionLogo from "./imgs/adoptionImg1.png";
import pawsImg from "../src/imgs/pawsBackground.jpg";

export default function MyRouter() {
  const mainStyle = {
    backgroundImage: `url(${pawsImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "100vh",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    padding: "0.3%",
  };

  const textSize = {
    fontSize: "20px",
  };

  return (
    <div>
      <div>
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark"
          style={textSize}
        >
          <div style={{ marginLeft: "6vh", position: "absolute" }}>
            <Link to="/" className="navbar-brand">
              <img src={adoptionLogo} height={70}></img>
            </Link>
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={navStyle}>
            <li className="nav-item">
              <Link to="/home" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/items" className="nav-link active">
                DogBreeds
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
