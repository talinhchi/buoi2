import logo from "./logo.svg";
import "./App.css";
import Hello, { HelloPerson } from "./components/Hello";
import Header from "./components/Header";
import Hello1 from "./components/Hello1";
import Car from "./components/Car";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Hello />
      <HelloPerson name={"Nguyen van phat"} />
      <Hello1 />
      <Car />
      <Login />
    </div>
  );
}

export default App;
