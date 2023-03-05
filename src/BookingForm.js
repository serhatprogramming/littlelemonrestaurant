import React from "react";
import BookingSlot from "./BookingSlot";
import { useEffect, useState } from "react";

const BookingForm = ({
  availableTimes,
  setAvailableTimes,
  setReservedDates,
  reservedDates,
  resTimes,
  dispatch,
}) => {
  const [submitDisabled, setSubmitDisabled] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setReservedDates([...reservedDates, availableTimes]);
    setAvailableTimes({
      date: new Date().toISOString().split("T")[0],
      slots: "17:00",
      guests: "1",
      occasion: "Birthday",
    });
  }

  const displayBookedTimes = (e) => {
    setAvailableTimes({
      ...availableTimes,
      date: e.target.value,
    });
  };

  useEffect(() => {
    const reserved = reservedDates
      .filter((reservedDate) => reservedDate.date === availableTimes.date)
      .map((reservedDate) => reservedDate.slots);
    dispatch({ type: "update", payload: { times: reserved } });
    // setReservedTimes(reserved);
  }, [availableTimes]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={availableTimes.date}
          onChange={displayBookedTimes}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          onChange={(e) =>
            setAvailableTimes({
              ...availableTimes,
              slots: e.target.value,
            })
          }
          value={availableTimes.slots}
        >
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          data-testid="guests-test"
          onChange={(e) => {
            setAvailableTimes({ ...availableTimes, guests: e.target.value });
            if (e.target.value > 10 || e.target.value < 1)
              setSubmitDisabled(true);
            else setSubmitDisabled(false);
          }}
          value={availableTimes.guests}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={availableTimes.occasion}
          onChange={(e) =>
            setAvailableTimes({ ...availableTimes, occasion: e.target.value })
          }
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {submitDisabled ? (
          <p style={{ color: "tomato" }}>
            The number of guests should be between 1 and 10
          </p>
        ) : (
          ""
        )}
        <button type="submit" disabled={submitDisabled}>
          Make Your reservation
        </button>
      </form>
      <br />
      <h3>Booked Times on {availableTimes.date}:</h3>
      {resTimes.times.length > 0 ? (
        <ul>
          {resTimes.times.map((time, key) => (
            <li key={key}>
              <BookingSlot time={time} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No Reservation for the date</p>
      )}
    </>
  );
};

export default BookingForm;
