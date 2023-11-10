import React, { useState, useReducer, useEffect } from "react";
import "./bookingform.css";

import { fetchAPI, submitAPI } from "./api";
import { Link } from "react-router-dom";

export const Reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, availableTime: action.payload };
    default:
      return state;
  }
};

function Reserve(props) {
  const [change, setChange] = useState("");
  const [click, setClick] = useState(1);
  const [isValid, setIsValid] = useState(false);

  const handleDateChange = (e) => {
    updateTime(e.target.value);
    setChange(e.target.value);
  };

  const handleclickChange = (e) => {
    e.preventDefault();
    if (click < 1 || click > 10) {
      alert("Number of guests must be between 1 and 10.");
    } else {
      submitForm(e);
    }
  };

  const submitForm = (formData) => {
    submitAPI(formData)
      .then((isSubmitted) => {
        if (isSubmitted) {
console.log("heloi")
        } else {
          console.log("Form submission failed");
        }
      })
  };

  const initialState = {
    time: "20:00",
    availableTime: ["15:00", "15:30", "16:00", "17:00", "18:00", "18:30", "19:30","20:30","21:30","22:30"],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const updateTime = (selectedDate) => {
    fetchAPI(selectedDate)
      .then((response) => {
        dispatch({ type: "update", payload: response });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleGuestChange = (e) => {
    setClick(e.target.value);
  };

  useEffect(() => {
    const isDateValid = change !== "";
    const isGuestsValid = click >= 1 && click <= 10;
    // Add more validation checks for other fields

    setIsValid(isDateValid && isGuestsValid); // Update based on additional fields
  }, [change, click]);

  return (
    <div className="contaa">
      <form onSubmit={handleclickChange}>
        <article className="a">
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" onChange={handleDateChange} required />
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" required>
            {state.availableTime.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </article>
        <article className="c">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            required
            onChange={handleGuestChange}
            value={click}
          />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" required>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </article>
        <Link to="/ConfirmedBooking">
        <button className="abutton" type="submit" disabled={!isValid} aria-label="On Click">
          Make Your Reservation
        </button></Link>
      </form>
    </div>
  );
}

export default Reserve;
