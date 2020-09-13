import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/about.css";
import Me from "../../assets/img/about/resu.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pad text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Me} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
              
    
        <h5>INTRODUCTION</h5><br />
        <p className='text-left'>I'm Muzammil Asrar born and raised in Karachi, Pakistan.
          I'm a final year student of Fast Nuces under the faculty of computer science.
          I have completed my intermediate from Dj Science College and Matriculation from Span Public School.
          I'm a creative thinker, good learner and a self-motivating person.
          My hobbies are watching Anime and playing Snooker.
          My short term goal is to get hired by well reputed organization.
        </p><br />
        <h5>WHY I'M DIFFERENT</h5><br />
        <p className='text-left'>
          I really enjoy learning new things and am constantly seeking out new learning opportunities.
        </p><br />
        <h5>WHAT I CAN CONTRIBUTE</h5><br />
        <p className='text-left'>
I will bring my creative visioning ability to you. I am experienced in many areas related to the current market.
        </p>

               
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1MOzv1uAOadz1H8F8apv50F9RHTeTZHiu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/akjha96" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/anand-kumar-jha-745798a4/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
