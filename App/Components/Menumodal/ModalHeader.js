import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { colors } from "../../Config";
import Feather from "react-native-vector-icons/Feather";

export default class ModalHeader extends Component {
  render() {
    console.log(this.props, "Props Hedare");
    return (
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.filterTxt}>{this.props.title}</Text>
        </View>
        <TouchableHighlight
          style={styles.closeBtnContainer}
          underlayColor={colors.bgColor}
          onPress={() => this.props.closeModal()}
        >
          <Feather name="x" size={25} />
        </TouchableHighlight>
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.2,
    flexDirection: "row"
  },
  titleContainer: {
    flex: 0.8,
    ...center
  },
  closeBtnContainer: {
    flex: 0.2,
    ...center
  },
  filterTxt: {
    color: colors.txtColor,
    fontSize: 20,
    fontFamily: "Poppins-SemiBold"
  }
});
