import "./App.css";
import Navbar_AL from "./components/Navbar_AL";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
