import React from "react";
import { useTheme } from "@react-navigation/native";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomLink = ({ text }) => {
	const { font } = useTheme();

	const styles = StyleSheet.create({
		customLink: { justifyContent: "center", alignItems: "center" },
		signupLink: { color: "#F25A53", fontFamily: font.bold },
	});

	return (
		<TouchableOpacity style={styles.customLink}>
			<Text style={styles.signupLink}>{text}</Text>
		</TouchableOpacity>
	);
};

export default CustomLink;
