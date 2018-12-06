/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import { foodItems, colors } from "./App/Config";
import Recipe from "./App/Components/Recipe";

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: [{ item_name: "Pasta" }, { item_name: "pizza" }]
    };
  }

  _keyExtractor = (item, index) => `${item.id}`;
  // <Recipe {...item} />
  render() {
    return (
      <View style={styles.container}>
        <Text>App screen</Text>
        <FlatList
          data={this.state.foodItems}
          renderItem={({ item }) => <Text>{item.item_name}</Text>}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
