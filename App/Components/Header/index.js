import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { colors } from "../../Config";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.homeHeaderContainer}>
        <View style={{ flex: 0.2 }} />
        <View style={styles.homeHeaderView}>
          <Text style={styles.homeHeaderText}>{this.props.title}</Text>
        </View>
        <View
          style={{ flex: 0.5, flexDirection: "row", backgroundColor: "red" }}
        >
          <TouchableOpacity
            style={styles.filterbyStyle}
            onPress={() => this.props.toggleModal()}
          >
            <Text>FilterBy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterbyStyle}>
            <Text>AddCart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  homeHeaderContainer: {
    flex: 0.1,
    backgroundColor: colors.bgColor,
    alignItems: "center",
    flexDirection: "row",
    paddingTop: Platform.OS == "ios" ? 12 : 0,
    elevation: 5
  },
  homeHeaderText: {
    color: colors.headerColor,
    fontWeight: "bold",
    fontSize: 18
  },
  homeHeaderView: {
    flex: 0.6,
    alignItems: "center"
  },
  homeIconView: {
    flex: 0.1,
    padding: 10,
    ...center
  },
  filterbyStyle: {
    flex: 0.5,
    marginRight: 5,
    padding: 10,
    ...center
  }
});
