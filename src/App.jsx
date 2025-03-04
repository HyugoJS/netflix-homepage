import "./App.css";
import data from "./assets/data.json";
import Header from "./components/Header";
import Section from "./components/Section";

// console.log(data);

const App = () => {
  // console.log(tabFromData);
  return (
    <>
      <div className="container">
        <Header />,
        <div>
          <Section />;
        </div>
      </div>
    </>
  );
};

export default App;
