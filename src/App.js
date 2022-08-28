import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage02 from "./pages/SearchPage02";
import MainPage01 from "./pages/MainPage01";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage01 />} />
          <Route path="search" element={<SearchPage02 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
