import React, { useContext, useState } from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import AppContext from "../shared/AppContext";
import { useTheme } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import CustomLink from "../components/CustomLink";

const LoginScreen = () => {
	const { colors, font } = useTheme();
	const appContext = useContext(AppContext);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "space-between",
			backgroundColor: "grey",
		},
		contentContainer: {
			backgroundColor: "white",
			padding: 30,
			borderTopRightRadius: 20,
			borderTopLeftRadius: 20,
		},
		title: { fontFamily: font.bold, fontSize: 24, marginBottom: 20 },
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
			<View></View>
			<View style={styles.contentContainer}>
				<BottomContent />
			</View>
		</View>
	);
};

export default LoginScreen;

function BottomContent() {
	const { colors, font } = useTheme();

	const [currentStep, setCurrentStep] = useState(0);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		console.log("Username:", username);
		console.log("Password:", password);
		setCurrentStep(2);
	};

	const styles = StyleSheet.create({
		title: { fontFamily: font.bold, fontSize: 24, marginBottom: 20 },
		labelText: { color: "#5A5A5A", fontFamily: font.regular, fontSize: 12 },
		input: {
			fontFamily: font.regular,
			width: "100%",
			height: 40,
			borderWidth: 1,
			borderColor: "gray",
			borderRadius: 10,
			marginBottom: 10,
			paddingHorizontal: 10,
		},
		dontHaveAccount: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
		},
		signupLink: { color: "#F25A53" },
	});

	switch (currentStep) {
		case 0:
			return (
				<View style={{ gap: 10 }}>
					<CustomButton
						title='Log in'
						onPress={() => setCurrentStep(1)}
						color='primary'
					/>
					<CustomButton
						title='Sign up'
						onPress={() => setCurrentStep(1)}
						color='secondary'
					/>
				</View>
			);
		case 1:
			return (
				<>
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
						value={password}
						onChangeText={(text) => setPassword(text)}
						secureTextEntry
					/>
					<CustomButton
						title='Sign up'
						onPress={handleLogin}
						color='primary'
					/>
					<Text style={styles.dontHaveAccount}>
						Already have an account? <CustomLink text='Log in' />
					</Text>
				</>
			);
		case 2:
			return (
				<View>
					<Text style={styles.labelText}>Phone / Email</Text>
					<TextInput style={styles.input} />
					<CustomButton
						title='Send OTP'
						color='primary'
						onPress={() => setCurrentStep(3)}
					/>
					<Text style={styles.dontHaveAccount}>
						Don't have an account? <CustomLink text='Sign up' />
					</Text>
				</View>
			);
		case 3:
			return (
				<View>
					<Text style={styles.labelText}>OTP</Text>
					<TextInput style={styles.input} />
					<CustomButton title='Confirm' color='primary' />
					<CustomLink text='Resend OTP' />
				</View>
			);
		default:
			return null;
	}
}
