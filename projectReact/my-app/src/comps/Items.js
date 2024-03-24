import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pawsImg from "../imgs/pawsBackground.jpg";
import Footer from "./Footer";
import MyRouter from "../MyRouter";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      breedInput: "",
      images: [],
    };
  }

  componentDidMount() {
    this.getBreedsResponse();
  }

  async getBreedsResponse() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      if (data.status === "success") {
        this.setState({ breeds: Object.keys(data.message) });
      } else {
        console.error("Failed to fetch breed list");
      }
    } catch (error) {
      console.error("Error fetching breed list:", error);
    }
  }

  handleInputChange = (event) => {
    this.setState({ breedInput: event.target.value });
  };

  getBreedImage = async () => {
    const breed = this.state.breedInput;
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      const data = await response.json();
      if (data.status === "success") {
        this.setState((prevState) => ({
          images: [{ url: data.message, isOpen: false }, ...prevState.images],
        }));
      } else {
        console.error(`Failed to fetch image for breed: ${breed}`);
      }
    } catch (error) {
      console.error(`Error fetching image for breed: ${breed}`, error);
    }
  };

  addImage = () => {
    const breed = this.state.breedInput;
    if (!breed) return;
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/2`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          const newImages = data.message.map((imageUrl) => ({
            url: imageUrl,
            isOpen: false,
          }));
          this.setState((prevState) => ({
            images: [...prevState.images, ...newImages],
          }));
        } else {
          console.error(
            `Failed to fetch additional images for breed: ${breed}`
          );
        }
      })
      .catch((error) =>
        console.error(
          `Error fetching additional images for breed: ${breed}`,
          error
        )
      );
  };

  deleteImage = (indexToDelete) => {
    this.setState((prevState) => ({
      images: prevState.images.filter((_, index) => index !== indexToDelete),
    }));
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${pawsImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          overflow: "auto",
        }}
      >
        <MyRouter />
        <div className="container-fluid h-100 text-center">
          <div className="row h-100">
            <div
              className="col-3 col-md-2 overflow-auto"
              style={{
                maxHeight: "calc(100vh - 40px - 100px)",
                backgroundColor: "rgba(202, 202, 202, 0.9)",
              }}
            >
              <h1>Breeds list:</h1>
              <ul className="list-group list-group-flush text-center">
                {this.state.breeds.map((breed, index) => (
                  <li key={index} className="list-group-item">
                    {breed}
                    <button
                      type="button"
                      className="btn btn-primary mt-2"
                      onClick={() =>
                        this.setState({ breedInput: breed }, this.getBreedImage)
                      }
                    >
                      Show Image
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="col-9 col-md-10 d-flex flex-column justify-content-start align-items-center"
              style={{
                backgroundColor: "rgba(202, 202, 202, 0.5)",
                height: "83vh",
              }}
            >
              <div>
                <label htmlFor="dog-name">Dog wanted:</label>
                <input
                  type="text"
                  id="dog-name"
                  name="dog-name"
                  placeholder="Input dog breed"
                  value={this.state.breedInput}
                  onChange={this.handleInputChange}
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  onClick={this.getBreedImage}
                >
                  Generate!
                </button>
              </div>
              <div
                className="p-2 w-100
              d-flex flex-wrap justify-content-center"
              >
                {this.state.images.map((image, index) => (
                  <div key={index} className="position-relative m-2">
                    <img
                      src={image.url}
                      alt={`Dog ${index}`}
                      className="img-fluid"
                      style={{ maxHeight: "30vh", maxWidth: "80%" }}
                    />
                    <button
                      className="btn btn-danger position-absolute top-0 end-0"
                      onClick={() => this.deleteImage(index)}
                      style={{ marginTop: "5px", marginRight: "5px" }}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
              <div className="p-2">
                <button
                  className="btn btn-secondary mt-3"
                  onClick={this.addImage}
                >
                  Add More Images
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
