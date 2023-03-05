import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookingpage" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
