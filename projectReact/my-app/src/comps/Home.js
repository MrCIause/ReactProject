import React from "react";
import Footer from "./Footer";
import MyRouter from "../MyRouter";
import pawsImg from "../imgs/pawsBackground.jpg";

export default function Home() {
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
    backgroundColor: "rgba(202, 202, 202, 0.8)",
    border: "1px solid white",
    borderRadius: "20px",
    margin: "0 auto",
    marginTop: "20vh",
  };

  return (
    <div style={background1}>
      <MyRouter />
      <div style={contentStyle}>
        <p>
          This site was made for generating dog pictures by their breed type.
        </p>
        <p>
          You can search for a specific breed and get a picture of a dog of that
          breed.
        </p>
        <p>
          Go to DogBreeds in the navbar to start generating random pictures by
          dog breed!
        </p>
      </div>
      <Footer />
    </div>
  );
}
