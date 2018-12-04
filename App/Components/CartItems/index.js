import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import { foodItems, colors } from "../../Config";
import Recipe from "../Recipe";
import CartDataProvider from "../../Store/CartDataProvider";

type Props = {};
export default class CartItems extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      savedFoodItems: []
    };
  }

  componentDidMount() {
    const savedFoodItems = Array.from(CartDataProvider.findAll());
    console.log(savedFoodItems, "response");
    this.setState({ savedFoodItems });
  }

  _keyExtractor = (item, index) => `${item.id}`;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.savedFoodItems}
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
