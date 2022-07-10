import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Lru from "../assets/img/Lru.png";
import Portfolio from "../assets/img/Portfolio.png";
import Reelify from "../assets/img/Reelify.webp";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "EXPENSE MANAGER- VOICE POWERED",
      description: "ReactJS Project",
      imgUrl: projImg2,
      Github:  <a href = "https://github.com/KirtiGauravMishra/expensemanager" classname ="btn" target="_blank">Github Link</a>,
      Live: <a href = "https://expense-tracker-kirtigaurav.netlify.app/" classname ="btn" target="_blank">Live Link</a>
    },
    {
      title: "REELIFY",
      description: "React JS, NodeJS, ExpressJS, MongoDB",
      imgUrl: Reelify,
      Github:  <a href = "https://github.com/KirtiGauravMishra/Reelify" classname ="btn" target="_blank">Github Link</a>,
      Live: <a href = "https://github.com/KirtiGauravMishra/Reelify" classname ="btn" target="_blank">Live Link</a>
    },
    {
      title: "CHAT LIST USING LRU CACHE",
      description: "Jvascript and Linkedlist",
      imgUrl: Lru,
      Github:  <a href = "https://github.com/KirtiGauravMishra/Chatlist" classname ="btn" target="_blank">Github Link</a>,
      Live: <a href = "https://kirtigauravmishra.github.io/Chatlist/" classname ="btn" target="_blank">Live Link</a>
    },
    {
      title: "SQL EDITOR",
      description: "ReactJS Project",
      imgUrl: projImg3,
      Github:  <a href = "https://github.com/KirtiGauravMishra/sqleditor/tree/master" classname ="btn" target="_blank">Github Link</a>,
      Live: <a href = "hhttps://sql-editor-2.netlify.app/" classname ="btn" target="_blank">Live Link</a>
    },
    {
      title: "ToDo List",
      description: "ReactJS Project",
      imgUrl: projImg1,
      Github:  <a href = "https://github.com/KirtiGauravMishra/todo-list" classname ="btn" target="_blank">Github Link</a>,
      Live: <a href = "https://github.com/KirtiGauravMishra/todo-list" classname ="btn" target="_blank">Live Link</a>
    },
    {
      title: "React-Portfolio",
      description: "ReactJS Project",
      imgUrl: Portfolio,
      Github:  <a href = "https://github.com/KirtiGauravMishra/portfolio" classname ="btn" target="_blank">Github Link</a>,
      Live: <a href = "https://github.com" classname ="btn" target="_blank">Live Link</a>
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are Few Projects that i have done in Mern Stack and Front-end, My Internship Experience  and Academic Performance</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Acedemics</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Here are Few Projects in Mern Stack and Front-end My Internship Experience  and Academic Performance</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                     
                      I worked in Immortal Star Online Zone Private Limited as a Front-End Web Developer for 3 Months where i:  <br/>
                      
                        • Developed the Front end of the application in NEXTJS which Increased
                          the SEO from 68% to 84%.  <br />
                         • Developed Front-end Pages in VanillaJS and React JS<br />
                         • Developed Chrome-Plugin for the Client
                        
                        
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My Current CGPA is 8.08 untill 6th Semester</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
