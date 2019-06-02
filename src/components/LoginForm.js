import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false };

	onButtonPress() {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFailure.bind(this));
			});
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			error: '',
			loading: false
		});
	}

	onLoginFailure() {
		this.setState({ error: 'Authentication failed', loading: false });		
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small" />;
		}
		
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log In
			</Button>
		);
	}

	render() {
		const { errorTextStyle } = styles;

		return (
			<Card>
				<CardSection>
					<Input
						keyboardType="email-address"
						label="Email"
						onChangeText={email => this.setState({ email })}
						placeholder="you@example.com"
						textContentType="emailAddress"
						value={this.state.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Password"
						onChangeText={password => this.setState({ password })}
						placeholder="password"
						secureTextEntry
						textContentType="password"
					/>
				</CardSection>

				<Text style={errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
