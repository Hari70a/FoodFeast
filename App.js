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
      foodItems: foodItems
    };
  }

  _keyExtractor = (item, index) => `${item.id}`;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.foodItems}
          renderItem={({ item }) => <Recipe {...item} />}
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
