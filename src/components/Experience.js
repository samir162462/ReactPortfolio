import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import codeI from '../icons/code.gif';
import stack from '../icons/stack.png';
import Azentio1 from '../icons/azentioLogo.webp';
import Elswedy from '../icons/elswedy.webp';

const Experience = () => {
  return (
    <div>


      <div className="hero-section">
        <div className="container">
          <div className="hero-text">
            <div className="left-side">
              <br></br>

              <h1 className='mt-2'><img height={60} width={60} src={codeI} alt="Experience" /> Experience</h1>
              <hr></hr>
              <Row className='m-0' xs={1} sm={2} >


              <Col>
                
                  <h5>  <img height={60} width={60} src={Azentio1} alt="Azentio icon" /> <b>Azentio Software </b> (Islamic Banking)</h5><Badge bg='light' style={{ color: "black" }}>Jul 2023 - Present</Badge>
                  <p>Software engineer and technical consultant specializing in IMAL Islamic banking systems. </p>

              </Col>
              <Col>
                  <h6><img height={30} width={30} src={stack} alt="Experience" />Stack</h6>
                  <p> -Java Spring MVC </p>
                  <p> -SQL Server and Oracle DB expert </p>
                  <Badge style={{ "fontSize": "12px" }} bg='secondary'>Banking Projects</Badge>
                  <p> International islamic banks over world</p>

                </Col>
              </Row>
              <hr></hr> 

              <Row className='m-0' xs={1} sm={2} >

                <Col>
                
                  <h5> <img className='ml-3' height={40} width={70} src={Elswedy} alt="Elswedy icon" /> <b>  &nbsp;  Elsewedy Electric </b>  (Cables Section)</h5><Badge bg='light' style={{ color: "black" }}>Jul 2022 - Jul 2023</Badge>
                  <p>Building, maintaining and testing critical software that speeds productivity and decreases the cost.</p>
                </Col>
                <Col>
                  <h6><img height={30} width={30} src={stack} alt="Experience" />Stack</h6>
                  <p> Java 6 * java 8 *java 17 * Spring boot 3 * Sql Server  * Git * MVC * Spring data * Spring security * JWT</p>
                  <Badge style={{ "fontSize": "12px" }} bg='secondary'>Cables Project</Badge>
                  <p> Software of cable creation </p>

                </Col>

              </Row>
              <hr></hr> 
              <Row className='m-0' xs={1} sm={2} >

                <Col>
                  <h5>ValueInSoft</h5><Badge bg='light' style={{ color: "black" }}>Mar 2021 - May 2022</Badge>
                  <p>Full Stack Web Application For Full Management Small Sized Shops.</p>
                </Col>
                <Col>
                  <h6><img height={30} width={30} src={stack} alt="Experience" />Stack</h6>
                  <p> React Js for frontend (React DOM, Formik, Axios, React Router, React Bootstrap And Functional Components)</p>
                  <p>Spring Boot for backend framework. (JPA, security, JWT, JDBC, OOP)</p>
                  <p>Heroku for cloud app hosting beside Relational database PostgreSQL - Multi Schema (Each Company or Shop Has unique Schema) .</p>
                  <Badge style={{ "fontSize": "12px" }} bg='secondary'>POS Individual Cloud Project</Badge>
                  
                </Col>

              </Row>
              <hr></hr>
              <Row className='m-0' xs={1} sm={2} >
                <Col>
                  <h5>Car Workshop Management System</h5><Badge bg='light' style={{ color: "black" }}>Aug 2020 - Mar 2021</Badge>
                  <p>Desktop Application for mange Car workShops.</p>
                </Col>
                <Col>
                  <h6><img height={30} width={30} src={stack} alt="Experience" />Stack</h6>
                  <p>Java - Multiple branches connection
                    Using Mysql and fully functional GUI using Jswing
                    Modern GUI view.
                    The system has POS, inventory system, employees system, clients system, car spare part system, financial services and online Database base hosting.</p>
                  <Badge style={{ "fontSize": "12px" }} bg='secondary'>Team Project</Badge>

                </Col>
              </Row>
              <hr></hr>
              <Row className='m-0' xs={1} sm={2} >
                <Col>
                  <h5>Heart Sounds Classification Using Automatic Smart-tuned Deep Learning Model</h5>
                  <Badge bg='light' style={{ color: "black" }}>Oct 2019 - Aug 2020</Badge>
                  <p>Associated with The British University in Egypt</p>
                </Col>
                <Col>
                  <h6><img height={30} width={30} src={stack} alt="Experience" />Stack</h6>
                  <p>Python (librosa, numpy, sklearn, matplotlib, pydub, scipy, tensorflow, pandas And keras ) </p>
                  <p>I have implemented Smart Adjustive Traning set that gives the training set 100% of the dataset unique samples that make small dataset very power full.    </p>
                  <Badge style={{ "fontSize": "12px" }} bg='secondary'>Graduation Project</Badge>
                  <p>A+ Project</p>

                </Col>
              </Row>
              <hr></hr>
              <Row className='m-0' xs={1} sm={2} >
                <Col>
                  <h5>Automobile Real Time System using Java with Esper</h5>
                  <Badge bg='light' style={{ color: "black" }}>Feb 2020 - May 2020</Badge>
                  <p>Associated with The British University in Egypt</p>
                </Col>
                <Col>
                  <h6><img height={30} width={30} src={stack} alt="Experience" />Stack</h6>
                  <p>Java - Esper, Jswing, OOP ,Software Engineering Techniques  </p>
                  <p> Real time cruising system
                    - Real time gearbox system
                    - Real time car meter system
                    - Real time distance calculator
                    Full GUI view simulation. </p>
                  <Badge style={{ "fontSize": "12px" }} bg='secondary'>Team Project</Badge>

                </Col>
              </Row>
              <hr></hr>
              <Row className='m-0' xs={1} sm={2} >
                <Col>
                  <h5>Compiler syntax analyser Context Free Grammar</h5>
                  <Badge bg='light' style={{ color: "black" }}>Jan 2020 - May 2020</Badge>
                  <p>Associated with The British University in Egypt</p>
                </Col>
                <Col>
                  <h6><img height={30} width={30} src={stack} alt="Experience" />Stack</h6>
                  <p>Java - The program has feature that will rearrange automatically - Algorithm works in recursive descent
                    -Parse tree using Java Tree it helps to draw the tree of the input string.
                    Full GUI view . </p>
                  <Badge style={{ "fontSize": "12px" }} bg='secondary'>Individual Project</Badge>

                </Col>
              </Row>
              <hr></hr>
              <Row className='m-0' xs={1} sm={2} >
                <Col>
                  <h5>Modeling and simulation Bank teller queue using java</h5>
                  <Badge bg='light' style={{ color: "black" }}>Oct 2019 - Dec 2019</Badge>
                  <p>Associated with The British University in Egypt</p>
                </Col>
                <Col>
                  <h6><img height={30} width={30} src={stack} alt="Experience" />Stack</h6>
                  <p>Java -
                    Full GUI view simulation. </p>
                  <Badge style={{ "fontSize": "12px" }} bg='secondary'>Individual Project</Badge>

                </Col>
              </Row>
              <br></br>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Experience