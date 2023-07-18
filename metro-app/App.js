import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppContext from "./shared/AppContext";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
	const [isReady, setIsReady] = useState(false);

	// Setting up global context
	const [darkTheme, setDarkTheme] = useState(true);
	const [columnCount, setColumnCount] = useState(2);
	const [accentColor, setAccentColor] = useState("tomato");

	const userSettings = {
		darkTheme: darkTheme,
		toggleTheme: () => setDarkTheme(!darkTheme),
		columnCount: columnCount,
		toggleColumns: () => setColumnCount(columnCount === 2 ? 3 : 2),
		accentColor: accentColor,
		toggleAccentColor: (color) => setAccentColor(color),
	};

	const fontName = "Montserrat";
	// const fontName = "OpenSans";
	// const fontName = "RobotoCondensed";
	// const fontName = "RobotoFlex";

	const AppTheme = {
		...DefaultTheme,
		dark: userSettings.darkTheme,
		colors: {
			...DefaultTheme.colors,
			accent: accentColor,
			// accent: "blue",
			primary: "rgb(255, 45, 85)",
			secondary: "#333333",
			background: "rgb(242, 242, 242)",
			card: "rgb(255, 255, 255)",
			text: "#fff",
			border: "rgb(199, 199, 204)",
			notification: "rgb(255, 69, 58)",
		},
		font: {
			regular: `${fontName}-Regular`,
			bold: `${fontName}-Bold`,
		},
	};

	useEffect(() => {
		const loadFonts = async () => {
			try {
				await Font.loadAsync({
					"Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
					"Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
					"OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
					"OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
					"RobotoCondensed-Regular": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
					"RobotoCondensed-Bold": require("./assets/fonts/RobotoCondensed-Bold.ttf"),
					"RobotoFlex-Regular": require("./assets/fonts/RobotoFlex-Regular.ttf"),
				});
			} catch (e) {
				console.warn(e);
			} finally {
				setIsReady(true);
				await SplashScreen.hideAsync();
			}
		};

		loadFonts();
	}, []);

	if (!isReady) {
		return null;
	}

	return (
		<AppContext.Provider value={userSettings}>
			<NavigationContainer theme={AppTheme}>
				<StatusBar style={AppTheme.dark === true ? "light" : "dark"} />
				<LoginScreen />
			</NavigationContainer>
		</AppContext.Provider>
	);
}
