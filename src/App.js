import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <div className="container">
          <Outlet />
        </div>
        <Footer />{" "}
      </AppProvider>
    </div>
  );
}

export default App;
