import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { colors } from "../../Config";
import HeaderWithBack from "../Header/HeaderWithBack";
import CouponField from "./CouponField";
import Orders from "./Orders";
import RowField from "./RowField";

import CartDataProvider from "../../Store/CartDataProvider";

export default class CartItems extends Component {
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
        <HeaderWithBack
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
        <View style={styles.subtotalContainer}>
          <RowField
            caption={"Subtotal"}
            amount={350}
            style={{ marginLeft: 10 }}
          />
          <RowField
            caption={"Deliver fee"}
            amount={10}
            style={{ marginLeft: 10, marginTop: 10 }}
          />
        </View>
        <View style={styles.subtotalContainer}>
          <RowField caption={"Total"} amount={460} />
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
  subtotalContainer: {
    marginHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.txtColor
  },
  subtotal: { flex: 0.8, justifyContent: "center", marginLeft: 10 },
  count: { flex: 0.2, ...center },
  subtotalTxt: {
    color: colors.txtColor
  },
  countTxt: {
    color: colors.txtColor
  }
});
