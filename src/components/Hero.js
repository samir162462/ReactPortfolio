import React from 'react';
import styled from 'styled-components';
import DisplayLottie from './DisplayLottie';
import Shapes from './Shapes';
import Coding from '../lottie/coding.json';
import SocialMedia from './SocialMedia';
import arrow from '../icons/arrow.gif';

const Hero = () => {
	return (
		<HeroStyled className="hero-section">

			<Shapes />
			<div className="container">
				<div className="hero-text">
					<div className="left-side">
						<h4>Hello there. I'm</h4>
						<h1>Samir Mohamed Filfi</h1>
						<p>I'm a Full Stack Web Developer.</p>
						<p>&& DataScience Researcher.</p>
						<SocialMedia />
					</div>
					<div className="right-side">
						<DisplayLottie animationData={Coding} />
					</div>

				</div>


				<center>

					<img height={25} width={25} src={arrow} alt="arrow"></img>
				</center>
			</div>

		</HeroStyled>
	);
};

const HeroStyled = styled.section`
	position: relative;
	height: 100vh;
	display: flex;
	align-items: center;
	background: linear-gradient(35deg, #11cdef, #1171ef) !important;
	z-index: 1;
	.hero-text {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.left-side {
			display: flex;
			flex-direction: column;
			h4,
			p {
				font-size: 30px;
				color: white;
				font-weight: 200;
			}
			h1 {
				font-size: 50px;
				color: white;
				margin-bottom: 10px;
			}
		}

		.right-side {
			width: 500px;
			max-width: 95%;
			display: flex;
			flex-direction: column;
		}
	}
	@media screen and (max-width: 768px) {
		height: initial;
		padding-bottom: 70px;
		padding-top: 160px;
		.hero-text {
			flex-direction: column;
		}
	}
`;

const Scroll = styled.section`
	z-index: 5;

.icon-scroll,
.icon-scroll:before
  position: absolute
  left: 50%

.icon-scroll
  width: 40px
  height: 70px
  margin-left: -20px

  top: 50%
  margin-top: -35px
  box-shadow: inset 0 0 0 1px #fff
  border-radius: 25px
	color:white
.icon-scroll:before
  content: ''
  width: 8px
  height: 8px
  background: #fff
  margin-left: -4px
  top: 8px
  border-radius: 4px
  animation-duration: 1.5s
  animation-iteration-count: infinite
  animation-name: scroll

@keyframes scroll
  0%
    opacity: 1
  100%
    opacity: 0
    transform: translateY(46px)
`;

export default Hero;
