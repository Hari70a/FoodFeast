import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView
} from "react-native";
import { foodItems, colors } from "../../Config";
import Recipe from "../Recipe";
import CartHeader from "./CartHeader";
import CouponField from "./CouponField";

import Orders from "./Orders";

import CartDataProvider from "../../Store/CartDataProvider";

type Props = {};
export default class CartItems extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      savedFoodItems: [],
      couponCode: "",
      alertTxt: ""
    };
  }

  componentDidMount() {
    const savedFoodItems = Array.from(CartDataProvider.findAll());
    console.log(savedFoodItems, "response");
    this.setState({ savedFoodItems });
  }

  confirmCoupon = () => {
    let txt;
    if (this.state.txt === "FREEDEL" && this.state.subTotal >= 100) {
      txt = "Coupon code applied";
    } else if (this.state.txt === "F22LABS" && this.state.subTotal >= 400) {
      txt = "Coupon code applied";
    } else {
      txt = "Please enter valid coupon code";
    }
    this.setState({ alertTxt: txt });
  };

  onChangeCode = code => {
    this.setState(code);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <CartHeader
          title={"Your Cart"}
          moveToPrevious={() => this.props.navigation.goBack()}
        />
        <Orders
          items={[
            { quantity: 1, itemName: "Pasta", itemPrice: 200 },
            { quantity: 1, itemName: "Pizza", itemPrice: 150 }
          ]}
        />
        <CouponField
          code={this.state.couponCode}
          onChangeCode={this.onChangeCode}
          alertTxt={this.state.alertTxt}
          confirmCoupon={this.confirmCoupon}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  }
});
