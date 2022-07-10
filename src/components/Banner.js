import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particlebackground from "./Particlebackground";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import kgm11 from '../assets/img/kgm11.jpeg';
import 'animate.css';
import cv from '../assets/img/cv.pdf';


import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "MERN Stack Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <div id = "container" className ="particle">
     <Particlebackground />
      
      </div>
      <Container>
      
        
        <Row className="aligh-items-center">
       
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                
                <h1>{`Hi! I'm Kirti,`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ ",Web Developer", ",MERN Stack Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>An aspiring software engineer with knowledge in software engineering
practices such as coding, testing, code reviews, code comments, etc. Strong
Problem solving skill and Web development skill in MERN Stack.</p>
               <a href = {cv} download  >
                  <button onClick={() => console.log('cv')}>Download CV<ArrowRightCircle size={25} /></button>
                </a>
                         
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={kgm11} alt="Kgm"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
