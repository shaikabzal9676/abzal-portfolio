import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Project from "./pages/Projects/Project";
import Techstack from "./pages/Tech Stack/Techstack";

import Tada from 'react-reveal/Tada'
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import MobileNav from "./components/MobileNav/MobileNav";


import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from "./context/ThemeContext";
function App() {
  const[theme]=useTheme()
  return (
    <>
    <div className="homepage" id={theme}>

   
     <ToastContainer/>
    <MobileNav/>
    
      <Layout />
      
      <div className="container">
        <About />
        <Education theme={theme} />
        <Techstack theme={theme}/>
        <Project theme={theme}/>
        {/* <WorkExp/> */}
        <Contact />
      </div>

      <ScrollToTop smooth color="#f29f67" style={{backgroundColor:"#1e1e2c",borderRadius:'80px'}}/>

      <div className="footer mb-3 ms-3">
        <Tada>

        <h4 className="text-center">Made by 💖Abzal &copy; 2024 </h4>
        </Tada>
      </div>
    </div>
    </>
  );
}

export default App;
