import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { StickyNavbar } from "./components/Navbar/StickyNavbar";
import Breakfast from "./pages/breakfast/Breakfast";
import Lunch from "./pages/lunch/Lunch";
import Dinner from "./pages/dinner/Dinner";
import Aperitif from "./pages/aperitif/Aperitif";

function App() {
  return (
    <>
      <StickyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Breakfast" element={<Breakfast />} />
        <Route path="/Lunch" element={<Lunch />} />
        <Route path="/Dinner" element={<Dinner />} />
        <Route path="/Aperitif" element={<Aperitif />} />
      </Routes>
    </>
  );
}

export default App;
