import "../../node_modules/swiper/swiper-bundle.min.css";

import "react-phone-input-2/lib/style.css";

import visionImg from "../assets/noun-vision-1702965-1-1.webp";
import missionImg from "../assets/Group-199-2.webp";
import valueImg from "../assets/h-1-1-2.webp";
import excellenceImg from "../assets/Picture-2-290x300.webp";
import icon1 from "../assets/Group-1-1.webp";
import icon2 from "../assets/Group-200-1.webp";
import icon3 from "../assets/Group-3.webp";
import icon4 from "../assets/Vector-9.webp";
import helpImg from "../assets/ss-1-1-1.webp";
import conatctImg from "../assets/3550585-1-1.webp";

function App() {
  return (
    <>
      <div className="about_us_wrapper">
        <div className="paralax">
          <h2>
            <span>MOVING THINGS</span> WAS NEVER THIS EASY BEFORE
          </h2>
        </div>
        <div className="who_we_are">
          <h2>WHO WE ARE</h2>
          <p>
            Azooz Express, Oman’s Finest And Fastest Growing Last Mile Delivery
            Company Based In Muscat, Our Delivery Management Business Is Built
            On Speed, Security, Reliability And Accountability, The Four Pillars
            Of Our Success Journey. Consistentlt Serving A Large Customer
            Community In Oman
          </p>
          <div className="vison-misson">
            <div className="left">
              <div>
                <figure>
                  <img src={visionImg} alt="" />
                </figure>
                <h2>Vision</h2>
                <p>
                  We aim to simplify Logistics by providing top-notch delivery
                  solutions and an unparalleled delivery services in GCC
                </p>
                <div className="design"></div>
              </div>
            </div>
            <div className="right">
              <figure>
                <img src={missionImg} alt="" />
              </figure>
              <h2>Mission</h2>
              <p>
                We aim to simplify Logistics by providing top-notch delivery
                solutions and an unparalleled delivery services in GCC
              </p>
              <div className="design"></div>
            </div>
          </div>
        </div>
        <div className="our_values">
          <div className="container">
            <div className="left">
              <h3>Our Values</h3>
              <p>
                At Azooz Express We Guarantee Safe And Timely Delivery While
                Prioritizing Your Needs Through Innovative Solutions Backed By
                Transparent Communication And Excellence
              </p>
            </div>
            <div className="right">
              <figure>
                <img src={valueImg} alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div className="excellence">
          <h3>WE SHARE EXCELLENCE IN</h3>
          <div className="container">
            <div className="left">
              <figure>
                <img src={excellenceImg} alt="" />
              </figure>
            </div>
            <div className="right">
              <div className="items">
                <img src={icon1} alt="" />
                <h4>
                  Assist your consignments with proper custom clearance and
                  necessary documentation
                </h4>
              </div>
              <div className="items">
                <img src={icon2} alt="" />
                <h4>
                  Storing in the required temperature and security until it's
                  dispatched
                </h4>
              </div>
              <div className="items">
                <img src={icon3} alt="" />
                <h4>
                  Assuring next-day delivery within Muscat and 2-3 working days
                  outstation
                </h4>
              </div>
              <div className="items">
                <img src={icon4} alt="" />
                <h4>
                  Managing, warehousing, and inventory shipments until the last
                  stop
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="help">
          <div className="left">
            <h3>WE VALUE OUR WORK AS MUCH AS OUR CLIENTS</h3>
            <p>
              We Understand How Sensitive Packages Are. We Know How Tiring
              Moving Can Be. So We Are Here To Help You Always.
            </p>
          </div>
          <div className="right">
            <figure>
              <img src={helpImg} alt="" />
            </figure>
          </div>
        </div>
        <div className="contact">
          <div className="container">
            <div className="left">
              <h3>LEAVE YOUR EMAIL ADDRESS AND WE WILL REACH OUT TO YOU</h3>
              <input type="text" name="" id="" placeholder="Enter your email" />
              <button>Send</button>
            </div>
            <div className="right">
              <figure>
                <img src={conatctImg} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
