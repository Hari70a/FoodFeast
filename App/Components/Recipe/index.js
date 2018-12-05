import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { colors } from "../../Config";
import ImageWrapper from "./ImageWrapper";
import CartModel from "../../Store/CartModel";
import CartDataProvider from "../../Store/CartDataProvider";
import AddCart from "./AddCart";
import RemoveCart from "./RemoveCart";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      disableRemovecartBtn: true
    };
  }

  componentDidMount() {
    // cos
    //this.isItemInCart();
    // CartDataProvider.deleteAll();
  }
  // <TouchableHighlight
  //         onPress={this.cartPhenoma}
  //         underlayColor={colors.bgColor}
  //       >
  isItemInCart = id => {
    const temp = Object.assign({}, CartDataProvider.findById(this.props.id));
    console.log(typeof temp, temp[0], "temp");
    if (temp[0]) return true;
    else return false;
  };

  render() {
    console.log(this.props, "Props ");
    // const temp = Array.from(CartDataProvider.findById(this.props.id));
    const temp = Object.assign({}, CartDataProvider.findById(this.props.id));
    console.log(typeof temp, temp[0], "temp");
    // console.log(
    //   Object.assign({}, CartDataProvider.findById(this.props.id)),
    //   "Isavailable"
    // );
    return (
      <View style={styles.container}>
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
                Rating: {this.props.average_rating}
                <Text style={{ fontSize: 20 }}>★</Text>
              </Text>
            </View>
          </View>
          <View style={styles.cartBtnContainer}>
            <AddCart onPress={this.add} />
            {this.isItemInCart(this.props.id) ? (
              <RemoveCart onPress={this.remove} />
            ) : null}
          </View>
        </View>
      </View>
    );
  }

  remove = () => {
    console.log("IJMMM Remove###");
    this.setState(
      (prev, props) => {
        console.log(prev, "prev##@@@@");
        return {
          quantity: prev.quantity - 1
        };
      },
      () => this.removeCart()
    );
  };

  add = () => {
    console.log("IJMMM add###");
    this.setState(
      (prev, props) => {
        console.log(prev, "prev##@@@@");
        return {
          quantity: prev.quantity + 1
        };
      },
      () => this.addCart()
    );
  };

  removeCart = () => {
    CartDataProvider.deleteById(this.props.id);
  };
  // actionToPerform = action => {
  //   //qty = 1 and add
  //   if (this.state.quantity === 1 && action == "add") addcartPhenoma();
  //   //qty= 1 and remove
  //   else if (this.state.quantity === 1 && action == "add") deleteCartById();
  //   //qty = 0 and add/remove
  //   else if (
  //     this.state.quantity === 0 &&
  //     (action == "add" || action == "remove")
  //   )
  //     showAlert();
  //   else if (this.state.quantity === 1 && action == "add") {
  //     //Only
  //   }
  // };

  addCart = () => {
    console.log(this.props, this.state.quantity, "cartPhenomena");
    var itemToSave = new CartModel(
      this.props.id,
      this.props.image_url,
      this.props.item_name,
      this.props.item_price,
      this.props.average_rating,
      2
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
