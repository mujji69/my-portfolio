import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/about.css";
import Me from "../../assets/img/about/resu.jpg";
import Image from "react-bootstrap/Image";


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
          I Graduated from Fast Nuces under the faculty of computer science.
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

               
                
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
