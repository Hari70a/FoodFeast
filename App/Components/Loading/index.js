import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { foodItems, colors } from "../../Config";

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: foodItems
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={colors.headerColor} size={'small'} />
        <Text style={styles.loadingTxt}>Loading...</Text>
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    ...center
  },
  loadingTxt:{
    color: colors.txtColor,
    fontFamily: 'Poppins-SemiBold'
  }
});
