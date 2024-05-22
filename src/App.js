import About from "./componants/About";
import Contact from "./componants/Contact";
import Experience from "./componants/Experience";
import Home from "./componants/Home";
import Navbar from "./componants/Navbar";
import Portfolio from "./componants/Portfolio";
import SocialLinks from "./componants/SocialLinks";

function App() {
  
  return (
   <div>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <SocialLinks/>
    </div>
  );
}

export default App;
