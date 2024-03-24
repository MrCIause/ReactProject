import React from "react";
import MyRouter from "../MyRouter";
import Footer from "./Footer";
import pawsImg from "../imgs/pawsBackground.jpg";

export default function About() {
  const background1 = {
    backgroundImage: `url(${pawsImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100vh",
    height: "50vh",
    backgroundColor: "rgba(202, 202, 202, 0.7)",
    border: "1px solid white",
    borderRadius: "20px",
    margin: "0 auto",
    marginTop: "20vh",
  };

  return (
    <div style={background1}>
      <MyRouter />
      <div style={contentStyle}>
        <h1>About me</h1>
        <p>I'm Adi Shcherbakov, 21 years old, stuednt in ArielUniversity.</p>
        <p>
          I chose to do my project about animals and specificly about dog breeds
          because i like them.
        </p>
      </div>
      <Footer />
    </div>
  );
}
