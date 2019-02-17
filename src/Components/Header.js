import React, { Component } from "react";

class Header extends Component {
  render() {
    const sayings = [
      "AND HE DOESN'T PREFER CHOCOLATE",
      "AND HE DOESN'T SPARKLE IN THE SUN",
      "AND THERE'S NO COUNT IN HIS NAME"
    ];

    const randomSaying = sayings[Math.random(3)];

    return (
      <div id="Header">
        <h1>
          THERE'S A <br /> VAMPIRE <br />
          IN THE <br />
          ROOM
        </h1>
        <h2>...{randomSaying}</h2>
        <p>
          This vampire is closer than you think and the worst part is tht you've
          invited them in. Plugged in chargers and adapters can account for 25%
          of your total household energy consumption and costing you hundreds of
          dollars every month. Simply unplugging these vampire chargers from the
          wall when not in use, puts extra money in your pocket.
        </p>
      </div>
    );
  }
}

export default Header;
