import data from "../assets/data.json";
const Section = () => {
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
  return tabFromData;
};

export default Section;
