import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { colors } from "../../Config";
import Loading from "../Loading";
import Ionicons from "react-native-vector-icons/Ionicons";

const menuItems = [
  { id: 1, title: "Price low to high" },
  { id: 2, title: "Rating" }
];

export default class MenuContent extends Component {
  render() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <TouchableHighlight
            style={{ padding: 15 }}
            underlayColor={"green"}
            onPress={() => this.props.closeModal()}
          >
            <Ionicons name="ios-close-circle" size={33} />
          </TouchableHighlight>
        </View>
        <View style={styles.contentContainer}>
          {menuItems.map((txt, index) => {
            return (
              <TouchableOpacity
                style={styles.menu}
                key={index}
                onPress={() => this.props.filterBy(txt.id)}
              >
                <Text style={styles.menuTxt}>{txt.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor
  },
  modalContainer: {
    height: 300,
    width: Dimensions.get("window").width - 40,
    backgroundColor: colors.bgColor,
    ...center
  },
  modalOuterContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    ...center
  },
  headerContainer: {
    flex: 0.2,
    alignItems: "flex-end",
    justifyContent: "center",
    width: Dimensions.get("window").width - 40
  },
  contentContainer: {
    flex: 0.8,
    marginTop: 15,
    width: Dimensions.get("window").width - 40
  },
  menu: {
    marginHorizontal: 15,
    borderColor: colors.txtColor,
    borderBottomWidth: 1,
    padding: 10
  },
  menuTxt: {
    color: colors.txtColor,
    fontSize: 18
  }
});
