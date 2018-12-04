import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { colors } from "../../Config";
import ImageWrapper from "./ImageWrapper";
import CartModel from "../../Store/CartModel";
import CartDataProvider from "../../Store/CartDataProvider";

export default class Recipe extends Component {
  render() {
    console.log(this.props, "Props ");
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.cartPhenoma}
          underlayColor={colors.bgColor}
        >
          <View>
            <ImageWrapper
              sourceUrl={this.props.image_url}
              itemName={this.props.item_name}
            />
            <View style={styles.itemDescription}>
              <View style={styles.priceContainer}>
                <Text style={styles.ratingTxt}>₹ {this.props.item_price}</Text>
              </View>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingTxt}>
                  Rating: {this.props.average_rating}{" "}
                  <Text style={{ fontSize: 20 }}>★</Text>
                </Text>
              </View>
            </View>
            <Text>+</Text>
            <Text>-</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
  cartPhenoma = () => {
    console.log(this.props, "cartPhenomena");
    var itemToSave = new CartModel(
      this.props.id,
      this.props.image_url,
      this.props.item_name,
      this.props.item_price,
      this.props.average_rating
    );
    console.log(itemToSave, "data");
    CartDataProvider.save(itemToSave);
  };
}

const center = { alignItems: "center", justifyContent: "center" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
    elevation: 5
  },
  itemDescription: { flex: 0.2, margin: 10, flexDirection: "row" },
  ratingTxt: {
    color: "#000"
  },
  ratingContainer: { flex: 0.3, ...center },
  priceContainer: { flex: 0.7, justifyContent: "center" }
});
