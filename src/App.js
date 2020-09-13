import React from 'react';
import Navbar from './components/landing/MyNavbar';
import Carousel from './components/landing/MyCarousel';
import Container from "react-bootstrap/Container";
import Fade from "react-reveal";

import { Parallax } from "react-parallax";
import About from './components/about/About';

import Zoom from "react-reveal/Zoom";

import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Carousel />
      <Navbar />
          <div>
            
          <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={require("./assets/img/parallex/background.webp")}
            bgImageAlt=""
            strength={-200}
          >
            <div>
            <Container className="container-box rounded">
                <Fade duration={500}>
                <About />
                </Fade>
            </Container>
          </div>
          </Parallax>
          </div>

          <div>
              <Container className="container-box rounded">
                
                <Zoom duration={500}>
                  <hr />
                  <Skills />
                </Zoom>
              
              </Container>
          </div>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <hr />
                <Projects />
              </Fade>
            </Container>
      
            <Footer />
      </div>
    </div>
  );
}

export default App;
