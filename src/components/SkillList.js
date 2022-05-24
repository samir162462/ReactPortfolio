import React from 'react'
import Shapes from './Shapes'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import linkedin from '../icons/react.png';//gears.svg
import spring from '../icons/springBoot.svg';
import gears from '../icons/gears.svg';
import java from '../icons/java-icon.svg';
import jsweb from '../icons/js.webp';
import postgresql from '../icons/postger.svg';
import ml from '../icons/ML.png';
import restApi from '../icons/restApi.png';
import git from '../icons/git.svg';
import python from '../icons/python.svg';
import oop from '../icons/oop.png';

const SkillList = () => {
    return (
        <div>


            <div className="hero-section">
                <Shapes />
                <div className="container">
                    <div className="hero-text">
                        <div className="left-side">
                        <br></br>

                            <h1 className='mt-2'><img height={60} width={60} src={gears} alt="Twitter" /> Skills List</h1>
                            <hr></hr>
                            <Row className='m-0' xs={2} sm={3} md={5} xl={5} xxl={5}>
                                <Col className='mt-3' ><img height={42} width={42} src={linkedin} alt="React" /> React </Col>
                                <Col className='mt-3'><img height={42} width={42} src={spring} alt="Spring" /> Spring</Col>
                                <Col className='mt-3'><img height={42} width={42} src={java} alt="Java" /> Java</Col>
                                <Col className='mt-3'><img height={42} width={42} src={jsweb} alt="JavaScript" /> JavaScript</Col>
                                <Col className='mt-3'><img height={42} width={42} src={postgresql} alt="Postgresql" /> Postgresql</Col>
                                <Col className='mt-3'><img height={42} width={42} src={restApi} alt="Rest" /> Rest Api</Col>
                                <Col className='mt-3'><img height={42} width={42} src={ml} alt="ML" />  ML</Col>
                                <Col className='mt-3'><img height={42} width={42} src={git} alt="Git" /> Git</Col>
                                <Col className='mt-3'><img height={42} width={42} src={oop} alt="oop" /> OOP</Col>
                                <Col className='mt-3'><img height={42} width={42} src={python} alt="oop" /> Python</Col>


                            </Row>
                            <br></br>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}


export default SkillList