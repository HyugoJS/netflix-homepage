import "./App.css";
import data from "./assets/data.json";
import Header from "./components/Header";

// console.log(data);

const App = () => {
  const tabFromData = data.map((elem, index) => {
    // console.log(elem);
    const allImages = elem.images;
    // console.log(allImages);

    return (
      <>
        <div className="movie-class" key={index}>
          <h1>{elem.category}</h1>,
          <div className="carrousel-img">
            {allImages.map((url) => {
              return <img src={url} alt="" />;
            })}
          </div>
        </div>
      </>
    );
  });

  // console.log(tabFromData);
  return (
    <>
      <div className="container">
        <Header />,<div>{tabFromData}</div>
      </div>
    </>
  );
};

export default App;
