import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { colors } from "../../Config/";

export default class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.title}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: 200,
    backgroundColor: colors.btnBg,
    paddingVertical: 15,
    ...center
  },

  title: {
    color: colors.bgColor,
    fontWeight: "bold",
    fontSize: 16
  }
});
