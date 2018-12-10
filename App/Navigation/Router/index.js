import { createStackNavigator, createAppContainer } from "react-navigation";
import React, { Component } from "react";
import { Text } from "react-native";
import HomeScreen from "../../Components/Home";
import DetailsScreen from "../../Components/Recipe/Details";
import CartItemsScreen from "../../Components/CartItems/";

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
export default createAppContainer(RootStack);
