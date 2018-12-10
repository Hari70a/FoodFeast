import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { colors } from "../../Config";
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
      quantity: 0,
      disableRemovecartBtn: true
    };
  }

  componentDidMount() {
    // console.log(CartDataProvider.deleteAll());
    console.log([...CartDataProvider.findAll()], "INN Find all");
  }

  isItemInCart = id => {
    // const temp = Object.assign({}, CartDataProvider.findById(this.props.id));
    // console.log(typeof temp, temp[0], "temp");
    // if (temp[0]) return true;
    // else return false;
  };

  render() {
    console.log(this.props, "Props ");
    // // const temp = Array.from(CartDataProvider.findById(this.props.id));
    // const temp = Object.assign({}, CartDataProvider.findById(this.props.id));
    // console.log(typeof temp, temp[0], "temp");
    // console.log(
    //   Object.assign({}, CartDataProvider.findById(this.props.id)),
    //   "Isavailable"
    // );
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
              <AddCart onPress={this.add} />
              <RemoveCart onPress={this.remove} />
              {/* <RemoveCart onPress={this.remove} /> */}
              {/* {this.isItemInCart(this.props.id) ? (
                <RemoveCart onPress={this.remove} />
              ) : null} */}
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  addCart = () => {
    console.log(this.props, this.state.quantity, "cartPhenomena");
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

  removeCart = id => {
    CartDataProvider.deleteById(id);
  };

  add = () => {
    this.addCart();
  };
  remove = () => {
    this.removeCart();
  };

  navigateToDetails = () => {
    console.log(this.props, " INNN $$$$$ Ppros");
    this.props.navigation.navigate("Details", { ...this.props });
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
