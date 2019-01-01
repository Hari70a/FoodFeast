import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { colors } from "../../Config";

export default class ImageWrapper extends Component {
  render() {
    const style = this.props.style ? this.props.style : {};
    const { borderTopLeftRadius, borderTopRightRadius } = style;
    return (
      <View style={{ flex: 0.8 }}>
        <ImageBackground
          source={{ uri: this.props.sourceUrl }}
          style={[styles.imageStyle, style]}
          borderTopLeftRadius={borderTopLeftRadius ? borderTopLeftRadius :  0}
          borderTopRightRadius={borderTopRightRadius ? borderTopRightRadius : 0}
        >
          <View
            style={[
              styles.itemNameContainer,
              {
                borderTopLeftRadius: borderTopLeftRadius
                  ? borderTopLeftRadius
                  : 0,
                borderTopRightRadius: borderTopRightRadius
                  ? borderTopRightRadius
                  : 0
              }
            ]}
          >
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
    ...center,
    ...posFixed
  },
  itemName: {
    color: colors.bgColor,
    fontFamily: "Poppins-SemiBold",
    fontSize: 22
  }
});
