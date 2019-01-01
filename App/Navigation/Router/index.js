import { createStackNavigator, createAppContainer } from "react-navigation";
import React, { Component } from "react";
import { Text } from "react-native";
import HomeScreen from "../../Components/Home";
import DetailsScreen from "../../Components/Recipe/Details";
import CartItemsScreen from "../../Components/CartItems/";
import ListStore from "../../Mobx/ListStore";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Details: {
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
      screen: DetailsScreen
    },
    CartItems: {
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
      screen: CartItemsScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(RootStack);

export default AppContainer;


