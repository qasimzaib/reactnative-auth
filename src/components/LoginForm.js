import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = { email: '', password: '' };

	render() {
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

				<CardSection>
					<Button>Log in</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
