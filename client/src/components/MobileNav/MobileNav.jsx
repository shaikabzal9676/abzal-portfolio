import { React, useState } from "react";
import "./mobilenav.css";
import { Link } from "react-scroll";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcContacts,
} from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdMenuOpen } from "react-icons/md";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const openClose=()=>{
    setOpen(false)
  }

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <MdMenuOpen
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title text">My Portfolio</span>
        </div>
        {open?( <div className="mobile-nav-menu">
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link onClick={openClose}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                  <span>Home</span>
                </Link>
              </div>
              <div className="nav-link">
                <Link onClick={openClose}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                  <span>About</span>
                </Link>
              </div>
              <div className="nav-link">
                <Link onClick={openClose}
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook />
                  <span>Education</span>
                </Link>
              </div>
              <div className="nav-link">
                <Link onClick={openClose}
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech />
                  <span>Tech Stack</span>
                </Link>
              </div>
              <div className="nav-link">
                <Link onClick={openClose}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector />
                  <span>Projects</span>
                </Link>
              </div>
              <div className="nav-link">
                <Link onClick={openClose}
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode />
                  <span>Work Experience</span>
                </Link>
              </div>

              <div className="nav-link">
                <Link onClick={openClose}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcContacts />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>):(<></>)}
       
      </div>
    </>
  );
};

export default MobileNav;
