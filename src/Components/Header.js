import React, { Component } from "react";

class Header extends Component {
  render() {
    const sayings = [
      "AND HE DOESN'T PREFER CHOCOLATE",
      "AND HE DOESN'T SPARKLE IN THE SUN",
      "AND THERE'S NO COUNT IN HIS NAME"
    ];

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    var randomSaying = () => {
      return <h2>...{sayings[getRandomInt(3)]}</h2>;
    };

    return (
      <div className="Header">
        <h1>
          THERE'S A <br /> VAMPIRE <br />
          IN THE <br />
          ROOM
        </h1>
        {randomSaying()}
        <div className="headerContent">
          <p>
            This vampire is closer than you think and the worst part is that
            you've invited them in. Plugged in chargers and adapters can account
            for 25% of your total household energy consumption and costing you
            hundreds of dollars every month. Simply unplugging these vampire
            chargers from the wall when not in use, puts extra money in your
            pocket.
          </p>
        </div>
        {/* <h3>Scroll Down to Learn More</h3> */}
      </div>
    );
  }
}

export default Header;
