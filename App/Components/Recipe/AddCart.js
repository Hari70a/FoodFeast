import React, { Component } from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";
import { colors } from "../../Config";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class AddCart extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.container}
        underlayColor={colors.bgColor}
        onPress={() => this.props.onPress()}
      >
        <Ionicons name="ios-add" size={35} />
      </TouchableHighlight>
    );
  }
}
const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: colors.txtColor,
    marginLeft: 15,
    ...center
  },
  plusBtn: {
    color: colors.txtColor,
    fontSize: 22
  }
});
