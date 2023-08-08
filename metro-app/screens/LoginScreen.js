import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppContext from "../shared/AppContext";
// import { useHistory } from "react-router-native";
import { useTheme } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import CustomLink from "../components/CustomLink";
import spacing from "../styles/constants/spacing";
import CustomInput from "../components/CustomInput";
// import DateTimePicker from "@react-native-community/datetimepicker";

const LoginScreen = () => {
	const { font } = useTheme();
	// const appContext = useContext(AppContext);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "space-between",
			backgroundColor: "#101015",
		},
		contentContainer: {
			backgroundColor: "white",
			borderTopRightRadius: 20,
			borderTopLeftRadius: 20,
			padding: spacing.APP_MARGIN,
			paddingBottom: 35,
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
		topLine: {
			// width: "20%",
			width: 48,
			height: 4,
			backgroundColor: "#9B9B9B6A",
			alignSelf: "center",
			marginTop: 10,
			marginBottom: 16,
			borderRadius: 2,
		},
	});

	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}></View>
			<View style={styles.contentContainer}>
				<View style={styles.topLine}></View>
				<View style={{ gap: 16 }}>
					<BottomContent />
				</View>
			</View>
		</View>
	);
};

export default LoginScreen;

function BottomContent() {
	const { colors, font } = useTheme();
	// const history = useHistory();

	const [currentStep, setCurrentStep] = useState(0);
	const [fullName, setFullName] = useState("");

	const handleLogin = () => {
		console.log("Full Name:", fullName);
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
			// alignItems: "center",
			justifyContent: "center",
		},
		signupLink: { color: "#F25A53" },
	});

	switch (currentStep) {
		case 0:
			return (
				<>
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
				</>
			);
		case 1:
			return (
				<>
					<CustomInput
						label='Full Name'
						placeholder='Full Name'
						value={fullName}
						onChangeText={(text) => setFullName(text)}
					/>
					<CustomInput
						label='Email'
						placeholder='Enter Email'
						value={fullName}
						onChangeText={(text) => setFullName(text)}
					/>
					<View
						style={{
							flexDirection: "row",
							// justifyContent: "space-between",
						}}
					>
						<CustomInput
							label='Phone'
							placeholder='Phone'
							style={{ flex: 1, marginRight: 8 }}
						/>
						<CustomInput
							label='Date of Birth'
							placeholder='DD/MM/YY'
							style={{ flex: 1, marginRight: 8 }}
						/>
					</View>
					{/* <DatePicker /> */}
					<CustomInput
						label='Occupation'
						placeholder='Graphic Designer'
					/>
					<CustomButton
						title='Sign up'
						onPress={handleLogin}
						color='primary'
					/>
					<View style={styles.dontHaveAccount}>
						<Text>Already have an account?</Text>
						<CustomLink text='Log in' />
					</View>
				</>
			);
		case 2:
			return (
				<>
					<CustomInput
						label='Phone / Email'
						placeholder='Phone / Email'
					/>
					<CustomButton
						title='Send OTP'
						color='primary'
						onPress={() => setCurrentStep(3)}
					/>
					<View style={styles.dontHaveAccount}>
						<Text>Don't have an account?</Text>
						<CustomLink text='Sign up' />
					</View>
				</>
			);
		case 3:
			return (
				<>
					<CustomInput label='OTP' placeholder='OTP' />
					<CustomButton
						title='Confirm'
						color='primary'
						link='/home'
					/>
					<CustomLink text='Resend OTP' />
				</>
			);
		default:
			return null;
	}
}
