import React from "react";
import "./about.css";
import profileImage from "../../assets/images/profile.jpg";
import Pulse from 'react-reveal/Jump'
const About = () => {
  return (
    <>
   

      <div id="about" className="about">
        <Pulse>
        <div className="row">
          <div className="col-md-6 about-img">
            <img src={`${profileImage}`} alt="" />
          </div>
          <div className="col-md-6 about-content">
            <h1>About Me</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              possimus nobis porro modi nam similique unde, aliquid ad iure
              maiores. Quisquam, corporis eveniet. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sapiente temporibus ipsa eos
              aspernatur consectetur blanditiis suscipit reprehenderit ipsam,
              quae voluptas minus beatae rem.
            </p>
          </div>
        </div>
      </Pulse>
      </div>
    </>
  );
};

export default About;
