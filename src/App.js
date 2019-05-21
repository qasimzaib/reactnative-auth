import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
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
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
