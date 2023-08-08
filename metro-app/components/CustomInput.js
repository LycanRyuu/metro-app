import React from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";

const CustomInput = ({
	label,
	placeholder,
	secureTextEntry,
	value,
	onChangeText,
}) => {
	const { font } = useTheme();

	const styles = StyleSheet.create({
		formInput: { gap: 4 },
		labelText: { color: "#5A5A5A", fontFamily: font.medium, fontSize: 12 },
		input: {
			fontFamily: font.medium,
			height: 50,
			borderWidth: 1.5,
			borderColor: "rgba(0, 0, 0, 0.15)",
			borderRadius: 10,
			marginBottom: 10,
			paddingHorizontal: 16,
		},
	});

	return (
		<View style={styles.formInput}>
			<Text style={styles.labelText}>{label}</Text>
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				placeholderTextColor='#9B9B9B'
				value={value}
				onChangeText={onChangeText}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	);
};

export default CustomInput;
