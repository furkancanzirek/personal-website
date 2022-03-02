import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";

import "./app.scss";


const App = () => {

  return (
    <div className="App">
              <Topbar></Topbar>
      <div className="container">

        <Intro></Intro>
        <Services ></Services>
        <Services data-aos="fade"></Services>
        <Services data-aos="fade"></Services>
        <Services data-aos="fade"></Services>
        <Services data-aos="fade"></Services>
        {/* <Skills></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact> */}
      </div>
    </div>
  );
};

export default App;
