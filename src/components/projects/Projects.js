import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import Image from "react-bootstrap/Image";
import html from "../../assets/img/skills/html-5.svg"
import css from "../../assets/img/skills/css3.svg"
import js from "../../assets/img/skills/javascript.svg";
import php from "../../assets/img/skills/php.svg";
import laravel from "../../assets/img/skills/laravel.png";
import mysql from "../../assets/img/skills/mysql.svg";
import python from "../../assets/img/skills/python.svg";
import react from "../../assets/img/skills/react.svg";
import node from "../../assets/img/skills/nodejs.svg";
import express from "../../assets/img/skills/express.svg";
import mongo from "../../assets/img/skills/mongodb.svg";
import aws from "../../assets/img/skills/aws.png";




import "../../assets/css/projects.css";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as='h1' className="d-flex justify-content-center flex-wrap">
                E-Procurement Portal
              </Card.Header>
              <Card.Body className>
                
                <div>
                  <Card.Text className=" style">
                    <strong className=''>Description:</strong>
                    <p>
                    The vendors would login to the system and would be displayed all the available tenders with details. The suppliers/vendors would be able to submit their quotation documents against the tasks, in the system. The system will automatically read all quotation documents submitted by different vendors, and extract all the essential information i.e. price, date, work duration, so that it can automatically recommend the best suited vendor for the particular task. The information from the documents will be extracted using a document parsing module that we are developing. After the task is completed the vendors would be able to submit their invoices for payment. The system would be pluggable with the organization’s ERP system so that keeping records of the transactions is easy. The task would be marked non-active after completion of payment. The admin would be responsible for adding new tasks to the system. He would also be able to view the stats/analytics history, and vendor risk profiling modules.  

                    </p>
                    <strong className=''>Technologies Used:</strong>
                    <div className='pt-4 d-flex justify-content-between'>
                        <Image src={html} className='svg'></Image>
                        <Image src={css} className='svg'></Image>
                        <Image src={js} className='svg'></Image>
                        <Image src={php} className='svg'></Image>
                        <Image src={laravel} className='svg'></Image>
                        <Image src={python} className='svg'></Image>
                        <Image src={mysql} className='svg'></Image>


                    </div>

                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as='h1' className="d-flex justify-content-center flex-wrap">
                Restaurant Reservation System
              </Card.Header>
              <Card.Body className>
                
                <div>
                  <Card.Text className=" style">
                    <strong className=''>Description:</strong>
                    <p>
                        ‘Restaurant Reservation System’ gives users access to reserve seats in different restaurants
                        without having to visit applications/websites of every individual restaurant. There will be two
                        types of users of the application, i.e the restaurant owners and the customers/eaters. The
                        restaurant owners will be able to upload their restaurant info which include the timings of the
                        restaurant, the menu and also the layout of seating in the dining area. The users can view the
                        restaurants in their area and reserve seats for many restaurants through a single web
                        application. The users will be able to select seats and tables of their choice from the layout on
                        there chosen time and date.
                    </p>
                    <strong className=''>Technologies Used:</strong>
                    <div className='pt-4 d-flex justify-content-between'>
                        <Image src={html} className='svg'></Image>
                        <Image src={css} className='svg'></Image>
                        <Image src={js} className='svg'></Image>
                        <Image src={php} className='svg'></Image>
                        <Image src={laravel} className='svg'></Image>
                        <Image src={mysql} className='svg'></Image>


                    </div>

                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as='h1' className="d-flex justify-content-center flex-wrap">
                Stadium Management System
              </Card.Header>
              <Card.Body className>
                
                <div>
                  <Card.Text className=" style">
                    <strong className=''>Description:</strong>
                    <p>
                        Stadium is a place where people get together to watch their favorite sports.
                        Stadiums usually host many thousands of spectators, which can be very difficult
                        to manage. To watch these matches one needs to book a seat. Booking a
                        seat sometimes might not appear to be much difficult but selling these many
                        tickets can be a difficult task.This system will help the customer to book tickets.
                        Customers can get details of upcoming matches and can book tickets, make
                        online payments using this system. This system will provide information of
                        available seats and gives the customer an option to book tickets of their choice
                        if available. This system will help users to get tickets of their favorite matches
                        within few easy steps.
                    </p>
                    <strong className=''>Technologies Used:</strong>
                    <div className='pt-4 d-flex justify-content-between'>
                        <Image src={html} className='svg'></Image>
                        <Image src={css} className='svg'></Image>
                        <Image src={js} className='svg'></Image>
                        <Image src={php} className='svg'></Image>
                        <Image src={laravel} className='svg'></Image>
                        <Image src={mysql} className='svg'></Image>


                    </div>

                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as='h1' className="d-flex justify-content-center flex-wrap">
                Friend Finder
              </Card.Header>
              <Card.Body className>
                
                <div>
                  <Card.Text className=" style">
                    <strong className=''>Description:</strong>
                    <p>
                    Friend Finder app can help
                    people to make new friends, make outing or other programs with their friends, or invite nearby
                    people to their activities, also it can help in certain emergencies to contact trusted people.
                    </p>
                    <strong className=''>Technologies Used:</strong>
                    <div className='pt-4 d-flex justify-content-between'>
                        <Image src={react} className='svg'></Image>
                        <Image src={node} className='svg'></Image>
                        <Image src={express} className='svg'></Image>
                        <Image src={mongo} className='svg'></Image>
                        <Image src={aws} className='svg'></Image>
                        


                    </div>

                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Projects;
