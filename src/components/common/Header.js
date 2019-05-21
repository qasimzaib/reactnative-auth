import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{ props.headerText }</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#006600',
		justifyContent: 'center',
		height: 60,
		paddingLeft: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 1,
		elevation: 4,
		position: 'relative',
		fontWeight: '800'
	},
	textStyle: {
		color: '#FFFFFF',
		fontSize: 20
	}
};

export { Header };
