import React, { useState } from "react";
import BookingForm from "./BookingForm";
import Header from "./Header";
import Footer from "./Footer";

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState({
    date: new Date().toISOString().split("T")[0],
    slots: "17:00",
    guests: "1",
    occasion: "Birthday",
  });

  const [reservedDates, setReservedDates] = useState([]);
  const [reservedTimes, setReservedTimes] = useState([]);

  return (
    <>
      <Header />
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        setReservedDates={setReservedDates}
        reservedDates={reservedDates}
        reservedTimes={reservedTimes}
        setReservedTimes={setReservedTimes}
      />
      <Footer />
    </>
  );
};

export default BookingPage;
