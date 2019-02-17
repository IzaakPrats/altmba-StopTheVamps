import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <h1>What Can I Do?</h1>

        <h2>
          Be a hero today: here’s what you can do to stop energy vampires and
          super-charge your energy savings.
        </h2>
        <ul>
          <li>
            Unplug your device adapters. You can use the energy vampire
            calculator to estimate how much you’re losing in costs and energy.{" "}
          </li>
          <li>
            Find hidden energy vampires by turning off your lights. Any device
            with a standby light is sucking up electricity even though you’re
            not using it.
          </li>
          <li>
            If you have lots of devices, use smart power strips and sockets with
            features such as automated shut off and no to low energy consumption
            to regulate your power usage.
          </li>
          <li>
            For appliances that are required to be plugged in all the time, here
            are some ideas on how to reduce their power consumption.
          </li>
          <li>
            Turn off any digital clocks. Digital clocks cause more power to be
            used than standby mode without a LED display.
          </li>
          <li>
            Change your desktop computer settings. Turn off screen savers and
            set a schedule for your computer to automatically turn off after a
            certain amount of idle time.
          </li>
          <li>
            Program a timer to shut off devices during a certain time, such as
            your Alexa/ Google Home when you’re at work during the day.
          </li>
        </ul>
      </div>
    );
  }
}

export default Content;
