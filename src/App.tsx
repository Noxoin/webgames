import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Segment, Container, Menu, Icon } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

function Index() {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.tsx</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>
	);
}

function Header() {
	return (
		<Segment vertical aligned='center' inverted>
			<Container>
				<Menu inverted size="large" pointing secondary>
					<img src="https://www.noxoin.com/assets/images/solid-logo.png" height="64" alt="logo" />
					<Menu.Item>
						<h1>Random Web Games</h1>
					</Menu.Item>
				</Menu>
			</Container>
		</Segment>
	);
}

function Footer() {
	return (
		<Segment vertical inverted>
			<Container>
				<Menu inverted secondary>
					<Menu.Item>
						© 2019 Dixon Cheung
					</Menu.Item>
					<Menu.Item position="right">
						<a href="https://ca.linkedin.com/in/dixon-cheung-42472b37">
							<Icon size="large" name="linkedin square"></Icon>
						</a>
						<a href="http://www.github.com/Noxoin">
							<Icon size="large" name="github square"></Icon>
						</a>
						<a href="http://stackoverflow.com/users/2969219/noxoin">
							<Icon size="large" name="stack overflow"></Icon>
						</a>
						<a href="https://open.spotify.com/user/12154825434">
							<Icon size="large" name="spotify"></Icon>
						</a>
					</Menu.Item>
				</Menu>
			</Container>
		</Segment>
	);
}

const App: React.FC = () => {
  return (
    <div className="App">
			{Header()}
			<Router>
				<Route path="/" component={Index} />
			</Router>
			{Footer()}
    </div>
  );
}

export default App;
