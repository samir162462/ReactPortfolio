import React from 'react'
import mC from '../icons/char.gif';
import gun from '../icons/gun.png';



const Life = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="container">
                    <div className="hero-text">
                        <div className="left-side">
                            <h1 className='mt-2'><img height={60} width={60} src={mC} alt="Twitter" /> Status Life</h1>
                            <hr></hr>
                            <p className='mt-2'><img height={30} width={30} src={gun} alt="Twitter" /> Military service - Finished (3/2021 - 3/2022) </p>

                            <br></br>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Life