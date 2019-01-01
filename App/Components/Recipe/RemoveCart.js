import React, { Component } from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { colors } from "../../Config";
import Entypo from "react-native-vector-icons/Entypo";

export default class RemoveCart extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.container}
        underlayColor={colors.bgColor}
        onPress={() => this.props.onPress()}
      >
        <Entypo name="minus" size={30} />
      </TouchableHighlight>
    );
  }
}
const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    padding: 5,
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
