import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { colors, images } from "../../Config";
import ModalHeader from "./ModalHeader";
import Feather from "react-native-vector-icons/Feather";

const menuItems = [
  { id: 1, title: "Price low to high", imgSource: images.price },
  { id: 2, title: "Rating", imgSource: images.rating }
];

export default class MenuContent extends Component {
  render() {
    console.log(this.props, "Props MenuContent");
    return (
      <View>
        <ModalHeader title={"Filters"} closeModal={this.props.closeModal} />
        <View style={styles.contentContainer}>
          {menuItems.map((cur, index) => {
            return (
              <TouchableOpacity
                style={styles.menu}
                key={index}
                onPress={() => this.props.filterBy(cur.id)}
              >
                <Image source={cur.imgSource} style={styles.imageSize} />
                <View style={styles.menuTxtContain}>
                  <Text style={styles.menuTxt}>{cur.title}</Text>
                </View>
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
  contentContainer: {
    flex: 0.8,
    marginTop: 15,
    width: Dimensions.get("window").width - 40
  },
  menu: {
    marginHorizontal: 15,
    padding: 10,
    flexDirection: "row"
  },
  menuTxt: {
    color: colors.txtColor,
    fontSize: 18,
    fontFamily: "Poppins-Regular"
  },
  menuTxtContain: {
    marginLeft: 10,
    justifyContent: "center"
  },
  imageSize: { width: 45, height: 45 }
});
