import React from "react";
import { useTheme } from "@react-navigation/native";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";

const CustomButton = ({ onPress, title, color, link }) => {
	const { font } = useTheme();

	const buttonColor =
		color === "secondary"
			? { backgroundColor: "#F0F0F0" }
			: { backgroundColor: "#F25A53" };

	const buttonTextColor =
		color === "secondary" ? { color: "#101015" } : { color: "#fff" };

	const styles = StyleSheet.create({
		button: {
			...buttonColor,
			paddingVertical: 14,
			paddingHorizontal: 20,
			borderRadius: 10,
			alignItems: "center",
			justifyContent: "center",
		},
		buttonText: {
			...buttonTextColor,
			fontFamily: font.semiBold,
			fontSize: 14,
		},
	});

	if (link?.length > 0)
		return (
			<Link to={link} style={styles.button}>
				<Text style={styles.buttonText}>{title}</Text>
			</Link>
		);

	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
