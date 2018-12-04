import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { colors } from "../../Config";

export default class ImageWrapper extends Component {
  render() {
    return (
      <View style={{ flex: 0.8 }}>
        <ImageBackground
          source={{ uri: this.props.sourceUrl }}
          style={styles.imageStyle}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
        >
          <View style={styles.itemNameContainer}>
            <Text style={styles.itemName}>{this.props.itemName}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const posFixed = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
};
const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  imageStyle: {
    height: 200
  },
  itemNameContainer: {
    backgroundColor: colors.shadeColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...center,
    ...posFixed
  },
  itemName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25
  }
});
