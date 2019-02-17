import React, { Component } from "react";
import poster1 from "../images/stopthevamps-poster1.png";
import poster2 from "../images/stopthevamps-poster2.png";
import poster3 from "../images/stopthevamps-poster3.png";

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

        <h1>References</h1>
        <h2>
          Want to learn more? Visit these sites for resources that help you plug
          in with purpose.
        </h2>
        <ul>
          <li>
            <a href="https://paylesspower.com/blog/vampire-energy/">
              THE COMPLETE GUIDE TO VAMPIRE POWER
            </a>
          </li>
          <li>
            <a href="http://www.occ.ohio.gov/sites/default/files/publications/electric/Vampire_Power.pdf">
              Vampire Power FAQ from the Ohio Consumers’ Council
            </a>
          </li>
          <li>
            <a href="https://www.energy.gov/articles/4-ways-slay-energy-vampires-halloween">
              4 Ways to Slay Energy Vampires This Halloween
            </a>
          </li>
          <li>
            <a href="https://standby.lbl.gov/measure/">
              Defining and measuring standby
            </a>
          </li>
          <li>
            <a href="https://www.forbes.com/sites/williampentland/2011/09/03/top-26-home-energy-hogs-turned-off/#6a3ab48153fe">
              Top 26 Stealth Home Energy Hogs
            </a>
          </li>
          <li>
            <a href="https://money.howstuffworks.com/personal-finance/budgeting/how-much-save-unplugging-appliances1.htm">
              How much can you save by unplugging appliances?
            </a>
          </li>
          <li>
            <a href="https://www.zdnet.com/article/how-much-power-does-your-smartphone-charger-waste/">
              How much power does your smartphone charger waste?
            </a>
          </li>
          <li>
            <a href="https://www.nytimes.com/2016/05/08/science/just-how-much-power-do-your-electronics-use-when-they-are-off.html">
              Just How Much Power Do Your Electronics Use When They Are ‘Off’?
            </a>
          </li>
          <li>
            <a href="https://data.worldbank.org/indicator/EG.USE.ELEC.KH.PC">
              Electric power consumption (kWh per capita)
            </a>
          </li>
          <li>
            <a href="https://www.nrdc.org/resources/home-idle-load-devices-wasting-huge-amounts-electricity-when-not-active-use">
              Home Idle Load: Devices Wasting Huge Amounts of Electricity When
              Not in Active Use
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=1-g73ty9v04">
              European Commission Energy PSA
            </a>
          </li>
        </ul>

        <h1>See More</h1>
        <h2>
          {"Check out our post on "}
          <a href="https://altmba27.altmba.com/t/theres-a-vampire-in-the-room/993">
            altMBA
          </a>
          {" and our print work below."}
        </h2>

        <div class="contentImages">
          <img src={[poster1]} />
          <hr />
          <img src={[poster2]} />
          <hr />
          <img src={[poster3]} />
        </div>
      </div>
    );
  }
}

export default Content;
