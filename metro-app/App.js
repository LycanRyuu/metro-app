import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NativeRouter, Routes, Route } from "react-router-native";
import { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppContext from "./shared/AppContext";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

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

	const fontName = "Poppins";

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
			medium: `${fontName}-Medium`,
			semiBold: `${fontName}-SemiBold`,
			bold: `${fontName}-Bold`,
		},
	};

	useEffect(() => {
		const loadFonts = async () => {
			try {
				await Font.loadAsync({
					"Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
					"Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
					"Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
					"Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
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
		<NativeRouter>
			<AppContext.Provider value={userSettings}>
				<NavigationContainer theme={AppTheme}>
					<StatusBar
						style={AppTheme.dark === true ? "light" : "dark"}
					/>
					<Routes>
						<Route path='/' element={<LoginScreen />} />
						<Route path='/home' element={<HomeScreen />} />
					</Routes>
				</NavigationContainer>
			</AppContext.Provider>
		</NativeRouter>
	);
}
