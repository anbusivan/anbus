import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import Experiences from './pages/experience';
import SignUp from './pages/signup';
import Gallery from './pages/gallery';
import Opinians from './pages/opinians';
import Testimonials from './pages/testimonials';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/home' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/experience' component={Experiences} />
		<Route path='/gallery' component={Gallery} />
		<Route path='/opinion' component={Opinians} />
		<Route path='/testmonials' component={Testimonials} />
		<Route path='/sign-up' component={SignUp} />
	</Switch>
	</Router>
);
}

export default App;
