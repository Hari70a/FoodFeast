import React, { Component } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import { colors } from "../../Config";
import ImageWrapper from "./ImageWrapper";
import Description from "./Description";

export default class Recipe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.navigateToDetails}
          underlayColor={colors.bgColor}
        >
          <View>
            <View>
              <ImageWrapper
                sourceUrl={this.props.image_url}
                itemName={this.props.item_name}
                style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
              />
              <Description
                itemPrice={this.props.item_price}
                avgRating={this.props.average_rating}
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  navigateToDetails = () => {
    this.props.navigation.navigate("Details", {
      isItemInCart: this.isItemInCart,
      addCart: this.addCart,
      removeCart: this.removeCart,
      ...this.props
    });
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
  itemDescription: {
    flex: 0.2,
    margin: 10,
    flexDirection: "row"
  },
  ratingTxt: {
    color: colors.txtColor,
    fontFamily: "Poppins-Regular"
  },
  ratingContainer: {
    flex: 0.3,
    ...center
  },
  priceContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  cartBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 15
  },
  quantityTxt: {
    paddingLeft: 15
  }
});
