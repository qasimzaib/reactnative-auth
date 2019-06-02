import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAgRj7jODquw9KwpaQ14PUPZB4mwzOm13c',
			authDomain: 'authentication-c64af.firebaseapp.com',
			databaseURL: 'https://authentication-c64af.firebaseio.com',
			projectId: 'authentication-c64af',
			storageBucket: 'authentication-c64af.appspot.com',
			messagingSenderId: '579471061921',
			appId: '1:579471061921:web:6c98e1958befda7b'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return <LogoutForm />;

			case false:
				return <LoginForm />;

			default:
				return (
					<View style={styles.spinerViewStyle}>
						<Spinner size="large" />
					</View>
				);
		}
	}

	render() {
		return (
			<View style={styles.mainViewStyle}>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

const styles = {
	mainViewStyle: {
		flex: 1
	},
	spinerViewStyle: {
		flex: 1,
		justifyContent: 'center'
	}
};

export default App;
