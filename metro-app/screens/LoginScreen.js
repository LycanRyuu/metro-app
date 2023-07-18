import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AppContext from "../shared/AppContext";
import { useTheme } from "@react-navigation/native";

const LoginScreen = () => {
	const { colors, font } = useTheme();
	const appContext = useContext(AppContext);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		console.log("Username:", username);
		console.log("Password:", password);
	};

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			paddingHorizontal: 20,
		},
		title: {
			fontFamily: font.bold,
			fontSize: 24,
			// fontWeight: "bold",
			marginBottom: 20,
		},
		input: {
			fontFamily: font.regular,
			width: "100%",
			height: 40,
			borderWidth: 1,
			borderColor: "gray",
			marginBottom: 10,
			paddingHorizontal: 10,
		},
	});

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TextInput
				style={styles.input}
				placeholder='Username'
				value={username}
				onChangeText={(text) => setUsername(text)}
			/>
			<TextInput
				style={styles.input}
				placeholder='Password'
				secureTextEntry
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>
			<Button title='Login' onPress={handleLogin} />
		</View>
	);
};

export default LoginScreen;
