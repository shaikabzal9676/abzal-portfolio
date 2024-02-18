import React, { useState } from "react";
import Home from "../../pages/Home/Home"
import "./layout.css";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Menu from "../Menu/Menu";
const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            
            <p onClick={handleToggle}>
              {toggle ? (
                <MdKeyboardDoubleArrowLeft size={30} />
              ) : (
                <MdKeyboardDoubleArrowRight size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle}/>
        </div>

        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
