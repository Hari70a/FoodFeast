/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import { foodItems, colors } from "../../Config";
import Recipe from "../Recipe";
import Loading from "../Loading";
import APIHandlers from "../../Services/APIHandlers";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: [],
      isLoading: true
    };
  }
  componentDidMount() {
    APIHandlers.getFoodItems().then(responseData => {
      this.setState({ foodItems: responseData, isLoading: false });
    });
  }

  _keyExtractor = (item, index) => `${item.id}`;

  render() {
    console.log(this.props, "Home Props");
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.foodItems}
          renderItem={({ item }) => (
            <Recipe {...item} navigation={this.props.navigation} />
          )}
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
  }
});
