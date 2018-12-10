import React, { Component } from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";
import { colors } from "../../Config";

export default class AddCart extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.container}
        underlayColor={colors.bgColor}
        onPress={() => this.props.onPress()}
      >
        <Text style={styles.plusBtn}>+</Text>
      </TouchableHighlight>
    );
  }
}
const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: colors.txtColor,
    marginLeft: 15,
    ...center
  },
  plusBtn: {
    color: colors.txtColor,
    fontSize: 18
  }
});
