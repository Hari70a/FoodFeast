import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { colors } from "../../Config";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.homeHeaderContainer}>
        <TouchableOpacity
          style={styles.backViewContainer}
          onPress={() => this.props.moveToPrevious()}
        >
          <Ionicons name="ios-arrow-round-back" size={33} />
        </TouchableOpacity>
        <View style={styles.homeHeaderView}>
          <Text style={styles.homeHeaderText}>{this.props.title}</Text>
        </View>
        <View style={{ flex: 0.2, flexDirection: "row" }} />
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  homeHeaderContainer: {
    flex: 0.1,
    height: 55,
    backgroundColor: colors.bgColor,
    alignItems: "center",
    flexDirection: "row",
    paddingTop: Platform.OS == "ios" ? 12 : 0,
    elevation: 5
  },
  backViewContainer: {
    flex: 0.2,
    height: 55,
    ...center
  },
  homeHeaderText: {
    color: colors.headerColor,
    fontFamily: "Poppins-SemiBold",
    fontSize: 20
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
