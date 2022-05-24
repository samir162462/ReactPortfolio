import React from 'react'
import styled from 'styled-components';
import Shapes from './Shapes';

const Body = () => {
    return (
        <div>
            <BodyStyled className="hero-section">
			<Shapes />
            <div className="container">
                <div className="hero-text">
                    <div className="left-side">

                    </div>
                </div>
  
            </div>
            </BodyStyled>
        </div>
    )
}

const BodyStyled = styled.section`
	height: 1px;
	display: flex;
	align-items: center;
	background: linear-gradient(35deg, #11cdef, #1171ef) !important;
	z-index: 1;
	
	

`;

export default Body