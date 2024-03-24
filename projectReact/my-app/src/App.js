import "bootstrap/dist/css/bootstrap.min.css";
import MyRouter from "./MyRouter";
import pawsImg from "../src/imgs/pawsBackground.jpg";
import Footer from "./comps/Footer";

function App() {
  const background1 = {
    backgroundImage: `url(${pawsImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
  };

  const greyBackGround = {
    backgroundColor: "rgba(202, 202, 202, 0.8)",
    height: "20vh",
    borderRadius: "20px",
  };

  return (
    <div style={background1}>
      <div>
        <MyRouter />
        <div className="container col-8 mt-5 p-5">
          <div className="text-center m-2" style={greyBackGround}>
            <h1>Home</h1>
            <p>Info about the site!</p>
          </div>
          <div className="text-center m-2" style={greyBackGround}>
            <h1>About</h1>
            <p>In about you will find information about me!</p>
          </div>
          <div className="text-center m-2" style={greyBackGround}>
            <h1>DogBreeds</h1>
            <p>
              Here you can choose dog breeds to get photographs and search for
              dogs!
            </p>
          </div>
        </div>
        <Footer />
        <div className="container"></div>
      </div>
    </div>
  );
}

export default App;
