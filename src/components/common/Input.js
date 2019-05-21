import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({
	keyboardType,
	label,
	onChangeText,
	placeholder,
	secureTextEntry,
	textContentType,
	value
}) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{ label }</Text>
			<TextInput
				autoCorrect={false}
				keyboardType={keyboardType}
				onChangeText={onChangeText}
				textContentType={textContentType}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				style={inputStyle}
				value={value}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 14,
		lineHeight: 23,
		flex: 2,
	},
	labelStyle: {
		fontSize: 14,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 48,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };
