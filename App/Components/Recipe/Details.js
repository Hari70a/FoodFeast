import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import ImageWrapper from "./ImageWrapper";
import { colors, showAlert } from "../../Config/";
import Description from "./Description";
import HeaderWithBack from "../Header/HeaderWithBack";
import QuantityInput from "./QuantityInput";
import CustomButton from "../CustomButton";
import AddCart from "./AddCart";
import RemoveCart from "./RemoveCart";
import CartDataProvider from "../../Store/CartDataProvider";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityCount: 0,
      isAvailable: props.navigation.state.params.isAvailable
    };
  }

  componentDidMount() {
    console.log(this.props, "IN Did Mount details");
  }

  // isItemInCart = id => {
  //   const temp = Object.assign({}, CartDataProvider.findById(this.props.id));
  //   console.log(typeof temp, temp[0], "temp");
  //   if (temp) {
  //     if (temp[0]) return true;
  //     else return false;
  //   } else return false;
  // };

  // addCart = () => {
  //   console.log(this.props, this.state.quantity, "cartPhenomena");
  //   var itemToSave = new CartModel(
  //     this.props.id,
  //     this.props.image_url,
  //     this.props.item_name,
  //     this.props.item_price,
  //     this.props.average_rating
  //   );
  //   console.log(itemToSave, "data");
  //   CartDataProvider.save(itemToSave);
  //   showAlert(`${this.props.item_name} added to cart successfully`);
  //   this.setState({ isAvailable: true });
  // };

  // removeCart = () => {
  //   CartDataProvider.deleteById(this.props.navigation.state.params.id);
  //   showAlert(`${this.props.item_name} deleted from the cart successfully`);
  //   this.setState({ isAvailable: false });
  // };
  updateQuantity = () => {
    const dataToUpdate = {
      id: this.props.navigation.state.params.id,
      imageUrl: this.props.navigation.state.params.image_url,
      itemName: this.props.navigation.state.params.item_name,
      itemPrice: this.props.navigation.state.params.item_price,
      avgRating: this.props.navigation.state.params.average_rating,
      quantity: parseInt(this.state.quantityCount)
    };
    console.log(dataToUpdate, "dataToUpdate");
    CartDataProvider.update(dataToUpdate, "quantity");
  };

  onChangeCount = count => {
    this.setState(count);
  };

  render() {
    console.log(this.state, this.props, "state and props details");
    return (
      <ScrollView style={styles.container}>
        <HeaderWithBack
          title={"Details"}
          moveToPrevious={() => this.props.navigation.goBack()}
        />
        <View style={{ flex: 0.5 }}>
          <ImageWrapper
            style={{
              height: 300,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0
            }}
            sourceUrl={this.props.navigation.state.params.image_url}
            itemName={this.props.navigation.state.params.item_name}
          />
        </View>
        <View style={{ flex: 0.5 }}>
          <Description
            itemPrice={this.props.navigation.state.params.item_price}
            avgRating={this.props.navigation.state.params.average_rating}
          />
          <View style={styles.rowContainer}>
            {this.state.isAvailable ? (
              <RemoveCart
                onPress={this.props.navigation.state.params.removeCart}
              />
            ) : (
              <AddCart onPress={this.props.navigation.state.params.addCart} />
            )}
          </View>
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
  }
});
