import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { colors } from "../../Config";
import ImageWrapper from "./ImageWrapper";
import Description from "./Description";

// import CartModel from "../../Store/CartModel";
// import CartDataProvider from "../../Store/CartDataProvider";

export default class Recipe extends Component {
  render() {
    console.log(this.props, "Props ");
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.navigateToDetails}
          underlayColor={colors.bgColor}
        >
          <View>
            <ImageWrapper
              sourceUrl={this.props.image_url}
              itemName={this.props.item_name}
            />
            <Description
              itemPrice={this.props.item_price}
              avgRating={this.props.average_rating}
            />
            <Text>+</Text>
            <Text>-</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  navigateToDetails = () => {
    console.log(this.props, " INNN $$$$$ Ppros");
    this.props.navigation.navigate("Details", { ...this.props });
  };

  cartPhenoma = () => {
    console.log(this.props, "cartPhenomena");
    // var itemToSave = new CartModel(
    //   this.props.id,
    //   this.props.image_url,
    //   this.props.item_name,
    //   this.props.item_price,
    //   this.props.average_rating
    // );
    // console.log(itemToSave, "data");
    // CartDataProvider.save(itemToSave);
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
  }
});
