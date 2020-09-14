import React from 'react';
import Navbar from './components/landing/MyNavbar';
import Text from './components/landing/Text';
import Carousel from './components/landing/MyCarousel';
import Container from "react-bootstrap/Container";
import Fade from "react-reveal";

import { Parallax } from "react-parallax";
import About from './components/about/About';

import Zoom from "react-reveal/Zoom";

import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Particles from "react-particles-js";
import { ParticlesReact } from "./ParticlesReact";
import './App.css';

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Carousel />
      <Text />
      <Navbar />
      
      <Particles
        className="particles particles-box"
        params={ParticlesReact}
      />
          <div>
            
          <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={require("./assets/img/about/background.webp")}
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

          <div className='skill'>
              <Container className="container-box rounded">
                
                <Zoom duration={500}>
                  
                  <Skills />
                </Zoom>
              
              </Container>
          </div>
          <div className='project'>
            <Container className="container-box rounded">
              <Fade duration={500}>
          
                <Projects />
              </Fade>
            </Container>
            
      </div>
      <Footer />
    </div>
  );
}

export default App;
