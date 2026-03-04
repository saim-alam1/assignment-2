import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-400 mx-auto">
        <Banner />
      </div>
    </>
  );
}

export default App;
