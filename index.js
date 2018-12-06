/** @format */

import { AppRegistry } from "react-native";
// import App from "./App/Components/CartItems";
import Router from "./App/Navigation/Router";
// import App from "./App";
import App from "./App/Components/Home";

import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Router);
