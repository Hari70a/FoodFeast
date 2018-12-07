import { createStackNavigator, createAppContainer } from "react-navigation";
import React, { Component } from "react";
import { Text } from "react-native";
import HomeScreen from "../../Components/Home";
import DetailsScreen from "../../Components/Recipe/Details";
import CartItemsScreen from "../../Components/CartItems/";

import { colors } from "../../Config/";

const Header = props => {
  return (
    <Text
      style={{
        marginLeft: 15,
        fontWeight: "bold",
        color: "#fff",
        fontSize: 18
      }}
    >
      {props.title}
    </Text>
  );
};

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        //title: 'FoodFeast',
        header: null
        // headerStyle: { backgroundColor: colors.headerColor },
        // headerTitle: <Header title={"FoodFeast"} />,
        // headerRight: null,
        // headerLeft: null,
        // headerTitleStyle: {
        //   fontWeight: "bold",
        //   color: colors.bgCotllor
        // }
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
