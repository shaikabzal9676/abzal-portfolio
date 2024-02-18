import React from "react";
import "./education.css";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = ({theme}) => {
  return (
    <>
      <div id='education'className="container education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement 
            className="vertical-timeline-element--work"
            contentStyle={theme=='light'?({ background: "white", color: "black" }):({backgroundColor:"var(--gray)",color:"white"})}
            contentArrowStyle={{ borderRight: "7px solid  var(--orange)" }}
            date="2020 - 2024" 
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              B-tech
            </h3>
            <h4 className="vertical-timeline-element-subtitle">LPU , Punjab | IN</h4>
            <p>
              CSE 
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={theme=='light'?({ background: "white", color: "black" }):({backgroundColor:"var(--gray)",color:"white"})}
            contentArrowStyle={{ borderRight: "7px solid  var(--orange)" }}
            date="2018 - 2020"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              12<sup>th</sup> Class
            </h3>
            <h4 className="vertical-timeline-element-subtitle">AndhraPradesh | IN</h4>
            <p>
              M.P.C
            </p>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
