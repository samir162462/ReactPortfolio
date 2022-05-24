import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import Fade from 'react-reveal/Fade';
import Header from './components/Header';
import Hero from './components/Hero';
import Body from './components/Body';
import SkillList from './components/SkillList';
import Education from './components/Education';
import Experience from './components/Experience';
import Life from './components/Life';

const App = () => {
	return (
		<Router>
			<div className="App">
				<GlobalStyles />
				<Fade top duration={1000} distance="40px">
					<Route exact path="/">
						<div className="container">
							<Header />
						</div>
						
						<Hero />
						<Education></Education>
						<Body />
						<SkillList />
						<Body />
						<Experience></Experience>
						<Body></Body>
						<Life></Life>
					</Route>
				</Fade>
			</div>
		</Router>
	);
};

export default App;
