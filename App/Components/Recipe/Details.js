import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import ImageWrapper from "./ImageWrapper";
import { colors } from "../../Config/";
import Description from "./Description";
import HeaderWithBack from "../Header/HeaderWithBack";
import QuantityInput from "./QuantityInput";
import CustomButton from "../CustomButton";
import AddCart from "./AddCart";
import RemoveCart from "./RemoveCart";
import CartDataProvider from "../../Store/CartDataProvider";


export default class Details extends Component {

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
    //CartDataProvider.deleteById(id);
  };

  add = () => {
    this.addCart();
  };

  remove = () => {
    this.removeCart();
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <HeaderWithBack
          title={"Your Cart"}
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
            <AddCart onPress={this.add} />
            <RemoveCart onPress={this.remove} />
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
const center={alignItems: 'center',justifyContent: 'center'}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  },
  rowContainer:{
    flexDirection: 'row',,
    ...center
  }
});
