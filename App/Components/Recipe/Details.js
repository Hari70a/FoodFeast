import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import ImageWrapper from "./ImageWrapper";
import { colors, showAlert } from "../../Config/";
import Description from "./Description";
import HeaderWithBack from "../Header/HeaderWithBack";
import QuantityInput from "./QuantityInput";
import CustomButton from "../CustomButton";
import AddCart from "./AddCart";
import RemoveCart from "./RemoveCart";
import CartDataProvider from "../../Store/CartDataProvider";
import CartModel from "../../Store/CartModel";
import observableListStore from "../../Mobx/ListStore";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityCount: props.navigation.state.params.quantity
        ? props.navigation.state.params.quantity
        : 0,
      isAvailable: false
    };
  }

  isItemInCart = id => {
    const temp = Object.assign({}, CartDataProvider.findById(id));
    if (temp[0]) return true;
    else return false;
  };

  updateQuantity = () => {
    const dataToUpdate = {
      id: this.props.navigation.state.params.id,
      imageUrl: this.props.navigation.state.params.image_url,
      itemName: this.props.navigation.state.params.item_name,
      itemPrice: this.props.navigation.state.params.item_price,
      avgRating: this.props.navigation.state.params.average_rating,
      quantity: parseInt(this.state.quantityCount)
    };
    CartDataProvider.update(dataToUpdate, "quantity");
    showAlert(
      `${this.state.quantityCount} ${
        this.props.navigation.state.params.item_name
      } updated to cart successfully`
    );
    this.props.navigation.replace("CartItems");
  };

  addCart = () => {
    if (this.isItemInCart(this.props.navigation.state.params.id)) {
      this.setState({ isAvailable: true });
    } else {
      var itemToSave = new CartModel(
        this.props.navigation.state.params.id,
        this.props.navigation.state.params.image_url,
        this.props.navigation.state.params.item_name,
        this.props.navigation.state.params.item_price,
        this.props.navigation.state.params.average_rating
      );
      CartDataProvider.save(itemToSave);
      showAlert(
        `${
          this.props.navigation.state.params.item_name
        } added to cart successfully`
      );
      observableListStore.getCount();
      this.props.navigation.replace("CartItems");
    }
  };

  removeCart = () => {
    CartDataProvider.deleteById(this.props.navigation.state.params.id);
    showAlert(
      `${
        this.props.navigation.state.params.item_name
      } deleted from the cart successfully`
    );
    observableListStore.getCount();
    this.props.navigation.navigate("Home");
  };

  onChangeCount = count => {
    this.setState(count);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <HeaderWithBack
          title={"Details"}
          moveToPrevious={() => this.props.navigation.navigate("Home")}
        />
        <View style={{ flex: 0.5 }}>
          <ImageWrapper
            style={{ height: 300 }}
            sourceUrl={this.props.navigation.state.params.image_url}
            itemName={this.props.navigation.state.params.item_name}
          />
        </View>
        <View style={{ flex: 0.5 }}>
          <Description
            itemPrice={this.props.navigation.state.params.item_price}
            avgRating={this.props.navigation.state.params.average_rating}
          />
          {this.props.navigation.state.params.quantity ? (
            <Text style={styles.qtyTxt}>
              quantity: {this.state.quantityCount}
            </Text>
          ) : null}

          <View style={styles.rowContainer}>
            <AddCart onPress={this.addCart} />
            {this.isItemInCart(this.props.navigation.state.params.id) ? (
              <View style={{ marginLeft: 15 }}>
                <RemoveCart onPress={this.removeCart} />
              </View>
            ) : null}
          </View>
          {this.state.isAvailable ? (
            <View>
              <QuantityInput
                count={this.state.quantityCount}
                onChangeCount={this.onChangeCount}
              />
              <View style={styles.centerElem}>
                <CustomButton
                  onPress={this.updateQuantity}
                  title={"Update cart "}
                />
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  },
  rowContainer: {
    flexDirection: "row",
    ...center
  },
  centerElem: {
    ...center
  },
  qtyTxt: {
    marginLeft: 15,
    color: colors.txtColor,
    fontFamily: "Poppins-Regular"
  }
});
