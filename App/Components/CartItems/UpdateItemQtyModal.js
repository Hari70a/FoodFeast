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
import ModalHeader from ".././Menumodal/ModalHeader";
import Feather from "react-native-vector-icons/Feather";

export default class UpdateItemQtyModal extends Component {
  render() {
    console.log(this.props, "Prop UpdateQy");
    return (
      <View>
        <ModalHeader
          title={"Update item quantity"}
          closeModal={this.props.closeModal}
        />
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
