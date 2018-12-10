import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { colors, showAlert } from "../../Config";
import ImageWrapper from "./ImageWrapper";
import CartModel from "../../Store/CartModel";
import CartDataProvider from "../../Store/CartDataProvider";
import AddCart from "./AddCart";
import RemoveCart from "./RemoveCart";
import Description from "./Description";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityCount: 0,
      isAvailable: false
    };
  }

  isItemInCart = id => {
    const temp = Object.assign({}, CartDataProvider.findById(this.props.id));
    if (temp[0]) return true;
    else return false;
  };

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
              />
              <Description
                itemPrice={this.props.item_price}
                avgRating={this.props.average_rating}
              />
            </View>
            <View style={styles.cartBtnContainer}>
              {this.isItemInCart(this.props.id) ? (
                <RemoveCart onPress={this.removeCart} />
              ) : (
                <AddCart onPress={this.addCart} />
              )}
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  addCart = () => {
    var itemToSave = new CartModel(
      this.props.id,
      this.props.image_url,
      this.props.item_name,
      this.props.item_price,
      this.props.average_rating
    );
    CartDataProvider.save(itemToSave);
    showAlert(`${this.props.item_name} added to cart successfully`);
    this.setState({ isAvailable: true });
  };

  removeCart = id => {
    CartDataProvider.deleteById(this.props.id);
    showAlert(`${this.props.item_name} deleted from the cart successfully`);
    this.setState({ isAvailable: false });
  };

  navigateToDetails = () => {
    this.props.navigation.navigate("Details", {
      isAvailable: this.state.isAvailable,
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
    color: "#000"
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
