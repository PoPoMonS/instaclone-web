import { makeVar, useReactiveVar } from "@apollo/client";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./screen/Home";
import Login from "./screen/Login";
import NotFound from "./screen/NotFound";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);
function App() {
	const isLoggedIn = useReactiveVar(isLoggedInVar);
	const darkMode = useReactiveVar(darkModeVar);
	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Router>
				<Switch>
					<Route path="/">{isLoggedIn ? <Home /> : <Login />}</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
