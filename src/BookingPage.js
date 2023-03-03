import React, { useReducer, useState } from "react";
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

  function updateTimes(resTimes, action) {
    switch (action.type) {
      case "update":
        return action.payload;
      default:
        return resTimes;
    }
  }

  const [resTimes, dispatch] = useReducer(updateTimes, { times: [] });

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
        resTimes={resTimes}
        dispatch={dispatch}
      />
      <Footer />
    </>
  );
};

export default BookingPage;
