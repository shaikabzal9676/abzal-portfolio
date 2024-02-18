import React from "react";
import "./techstack.css";
import RubberBand from "react-reveal/RubberBand"
import Fade from "react-reveal/Fade"
import { TechstackList } from "../../utils/TechstackList";
const Techstack = ({theme}) => {
  return (
    <>
      <div id="techstack"  className="container techstack">
        <RubberBand>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Technologies Stack</h2>
        <hr />
        <p className="pd-3 text-center" style={theme=='dark'?{color:"black"}:{color:"white"}}>
          👉 including programming languages , frameworks, databases, front-end
          and back-end tools and APIs
        </p>
        </RubberBand>

          <Fade left>
        <div className="row" >
          {TechstackList.map((tech) => (
            
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    
                    <div className="media d-flex justify-content-center">
                        
                      <div className="alig-self-center ">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <p>{tech.name}</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
          </Fade>
      </div>
    </>
  );
};

export default Techstack;
