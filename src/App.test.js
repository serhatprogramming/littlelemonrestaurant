import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import BookingForm from "./BookingForm";

test("renders Specials Heading in main page", () => {
  render(
    <Router>
      <Main />
    </Router>
  );
  const specialElement = screen.getByText("Specials");
  expect(specialElement).toBeInTheDocument();
});

const availableTimes = {
  date: new Date().toISOString().split("T")[0],
  slots: "17:00",
  guests: "1",
  occasion: "Birthday",
};

const submitDisabled = false;

test("validation check submit button", () => {
  render(
    <Router>
      <BookingForm
        availableTimes={availableTimes}
        reservedDates={[]}
        reservedTimes={[]}
        resTimes={{ times: [] }}
        dispatch={() => {
          return null;
        }}
      />
    </Router>
  );

  const submit = screen.getByRole("button");
  expect(submit).toBeInTheDocument();
  expect(submit.textContent).toBe("Make Your reservation");
  expect(submit).not.toHaveAttribute("disabled");
});
