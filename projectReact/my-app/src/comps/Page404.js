import React from "react";
import pawsImg from "../imgs/pawsBackground.jpg";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Page404() {
  const mainStyle = {
    backgroundImage: `url(${pawsImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "100vh",
  };

  return (
    <div style={mainStyle} className="text-center row">
      <div
        style={{ backgroundColor: "rgba(202, 202, 202, 0.8)", width: "50vh" }}
        className="m-auto p-5"
      >
        <h1 style={{ color: "red" }}>Page Not Found</h1>
        <h1 style={{ color: "red" }}>404</h1>
        <Link to="/" className="navbar-brand">
          <button className="btn btn-danger">BackToHome</button>
        </Link>
      </div>
    </div>
  );
}
