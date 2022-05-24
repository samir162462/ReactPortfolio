import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gb from '../icons/gradProd.png';
import LSBU from '../icons/LSBU.png';
import graduate from '../icons/gc.gif';
import bue from '../icons/BUE_Logo.png';

const Education = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="container">
                    <div className="hero-text">
                        <div  className="left-side">
                        <br></br>

                            <h1 className='mt-2'><img height={60} width={60} src={graduate} alt="Twitter" /> Education</h1>
                            <hr></hr>
                            <div className='align-baseline mt-3 ' >
                            
                                <center>
                                    <Row>
                                        <Col>
                                        <div className='' ><img height={100} width={100} src={LSBU} alt="React" /> London South Bank University </div>

                                        </Col>
                                        <Col>
                                        <div className='' ><img height={100} width={100} src={bue} alt="React" /> British University In Egypt </div>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <p>Grade: First Class Honors </p>
                                        <em>2017-2020 </em>

                                        </Col>
                                        <Col>
                                        <p>Grade: B+ With Honors </p>
                                        <em>2016-2020 </em>

                                        </Col>
                                    </Row>
                                    <p>Bachelor of computer science (BCS) </p>
                                    <div className='' ><img height={42} width={42} src={gb} alt="React" /> <strong> Graduation Project: A+ </strong>  </div>

                                </center>
                            </div>

                            <br></br>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Education