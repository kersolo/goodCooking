import "./App.css";
import { StickyNavbar } from "./components/StickyNavbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <>
      <StickyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
