/** @format */

import { AppRegistry } from "react-native";
import Router from "./App/Navigation/Router";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Router);
