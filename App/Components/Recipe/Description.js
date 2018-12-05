import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import { foodItems, colors } from "../../Config";

type Props = {};
export default class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: foodItems
    };
  }
  componentDidMount() {}

  _keyExtractor = (item, index) => `${item.id}`;

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
