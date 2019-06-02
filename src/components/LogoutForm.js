import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection } from './common';

class LogoutForm extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Button onPress={() => firebase.auth().signOut()}>
						Log Out
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LogoutForm;
