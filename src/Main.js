import React from "react";
import HeroImage from "./images/restauranfood.jpg";
import Salad from "./images/greek salad.jpg";
import Chef from "./images/restaurant chef B.jpg";
const Main = () => {
  return (
    <main>
      <div className="hero-container">
        <div className="container">
          <div className="hero">
            <div className="hero-text">
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>
                We are a family owned mediterranean restaurant, focused on
                traditional recipes with a modern twist
              </p>
              <button className="btn-primary">Reserve a Table</button>
            </div>
            <div className="hero-image">
              <img src={HeroImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="specials">
        <div className="container">
          <div className="specials-title">
            <h1>Specials</h1>
            <button className="btn-secondary">Order Online</button>
          </div>
          <div className="specials-cards">
            <div className="special-card">
              <img src={HeroImage} alt="" />
              <div className="special-info">
                <div className="special-title">
                  <h3>Greek Salad</h3>
                  <h3 className="price-tag">$12.75</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus sed vel corporis debitis dolore praesentium!
                </p>
              </div>
            </div>
            <div className="special-card">
              <img src={Salad} alt="" />
              <div className="special-info">
                <div className="special-title">
                  <h3>Greek Salad</h3>
                  <h3 className="price-tag">$12.75</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus sed vel corporis debitis dolore praesentium!
                </p>
              </div>
            </div>
            <div className="special-card">
              <img src={Chef} alt="" />
              <div className="special-info">
                <div className="special-title">
                  <h3>Greek Salad</h3>
                  <h3 className="price-tag">$12.75</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus sed vel corporis debitis dolore praesentium!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
