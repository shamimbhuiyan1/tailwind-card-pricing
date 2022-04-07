import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <h1 className="text-4xl">Welcome To my pricing club</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
