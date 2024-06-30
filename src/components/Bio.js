import React from 'react'
import Shapes from './Shapes'
import about from '../icons/about.png';


const Bio = () => {
    return (
        <div>


            <div className="hero-section">
                <Shapes />
                <div className="container">
                    <div className="hero-text">
                        <div className="left-side">
                        <br></br>
                        <h1 className='mt-2'><img height={60} width={60} src={about} alt="Twitter" /> About Me</h1>
                            <hr></hr>
             <p>Professional Java software engineer with a strong background in developing enterprise applications using Java technologies. Expertise in RESTful APIs, microservices, and cloud-native apps with Spring Boot. Proficient in Spring MVC, Spring Data, Spring Security, and React JS for robust web applications. Experienced technical consultant in the banking sector. Committed to writing clean, maintainable code and staying updated with industry trends.</p>
                            <br></br>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}


export default Bio