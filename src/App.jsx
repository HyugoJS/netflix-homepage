import "./App.css";
import data from "./assets/data.json";
// console.log(data);

const App = () => {
  const tabFromData = data.map((elem, index) => {
    // console.log(elem);
    const allImages = elem.images;

    // const movieImages = allImages.map((item) => {
    //   // return <div>{movieImages}</div>;
    // });
    return (
      <>
        <h1 key={index}>{elem.category}</h1>,
        <div className="carrousel-img" key={index}>
          {allImages}
        </div>
      </>
    );
  });

  console.log(tabFromData);
  return (
    <>
      <header>
        <div>Logo Netflix</div>
        {/* <img src="./assets/img/logo-netflix.jpg" alt="netflix-logo" /> */}
      </header>
      ,<div>{tabFromData}</div>
    </>
  );
};

export default App;
