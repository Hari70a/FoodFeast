import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../Config";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.itemDescription}>
        <View style={styles.priceContainer}>
          <Text style={styles.ratingTxt}>₹ {this.props.itemPrice}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingTxt}>
            Rating: {this.props.avgRating}
            <Text style={{ fontSize: 20 }}>★</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  },
  itemDescription: {
    flex: 0.2,
    margin: 10,
    flexDirection: "row"
  },
  ratingTxt: {
    color: "#000"
  },
  ratingContainer: { flex: 0.3, ...center },
  priceContainer: { flex: 0.7, justifyContent: "center" }
});
