import Header from "./Header";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
