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
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CartDataProvider from "../../Store/CartDataProvider";

// FontAwesome5;
export default class Header extends Component {
  render() {
    return (
      <View style={styles.homeHeaderContainer}>
        <View style={{ flex: 0.2 }} />
        <View style={styles.homeHeaderView}>
          <Text style={styles.homeHeaderText}>{this.props.title}</Text>
        </View>
        <View style={{ flex: 0.4, flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.filterbyStyle}
            onPress={() => this.props.toggleModal()}
          >
            <FontAwesome name="filter" size={33} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterbyStyle}
            onPress={() => this.props.gotoCart()}
          >
            <Text style={styles.count}>
              {[...CartDataProvider.findAll()].length}
            </Text>
            <Entypo name="shopping-cart" size={33} color={colors.txtColor} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  homeHeaderContainer: {
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
    flex: 0.7,
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
  },
  count: {
    color: colors.notifyColor
  }
});
