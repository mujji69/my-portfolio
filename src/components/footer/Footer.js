import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


import "../../assets/css/footer.css";

const Footer = () => {
  return (
    
    <div id="contact">
      <div className=' footer-style'>
      <Container>
        <Row className='pad'>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2 z">
              <a href="mailto:muzammil.asrar98@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="muzammil.asrar98@gmail.com">
                  <i className="fas fa-envelope-square"></i>Email Me
                </Button>
              </a>
            </div>
            <div className="m-2 z">
              <a href="https://www.linkedin.com/in/muzammil-asrar-6b58bb1a3/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkedIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2 z">
              <a href="https://www.facebook.com/muzzammil.asrar/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="let's be friends">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
            <div className="m-2 z">
              <a href="https://github.com/mujji69" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            
          </Col>
        </Row>
        </Container>
  
      
      <div className="py-2 text-center">© MAK &nbsp; {new Date().getFullYear()}</div>
      </div>
    </div>
  );
};

export default Footer;
