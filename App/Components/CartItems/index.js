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
      subtotal: 0,
      couponCode: "",
      alertTxt: "",
      deliveryFee: 30,
      total: 0
    };
  }

  componentDidMount() {
    const savedFoodItems = Array.from(CartDataProvider.findAll());
    console.log(savedFoodItems, "response");
    this.calcSubtotal(savedFoodItems);
    this.setState({ savedFoodItems });
  }

  getAlertTxt = () => {
    let txt;
    if (this.state.txt === "FREEDEL" && this.state.subTotal > 100) {
      txt = "Coupon code applied";
      this.setState({ deliveryFee: 0 }, () =>
        this.calcTotal(this.state.subTotal)
      );
    } else if (this.state.txt === "SPRITLE" && this.state.subTotal > 400) {
      txt = "Coupon code applied";
      this.updateSubTotal();
    } else {
      txt = "Please enter valid coupon code";
    }
    return txt;
  };

  updateSubTotal = () => {
    //this.setState({ alertTxt: this.getAlertTxt() });
  };

  onChangeCode = code => {
    this.setState(code);
  };

  calcSubtotal = savedItems => {
    console.log(savedItems, this.state.savedFoodItems, "foodItems");
    const subtotal = savedItems.reduce((acc, cur) => {
      console.log(acc, cur, "acc, cur");
      return acc + cur.price;
    }, 0);
    this.calcTotal(subtotal);
  };

  calcTotal = subtotal => {
    const total = this.state.deliveryFee + subtotal;
    this.setState({ subtotal, total });
  };

  render() {
    console.log(this.state, "svedFoodItems");
    return (
      <ScrollView style={styles.container}>
        <HeaderWithBack
          title={"Your Cart"}
          moveToPrevious={() => this.props.navigation.goBack()}
        />
        <Orders items={this.state.savedFoodItems} />
        <CouponField
          code={this.state.couponCode}
          onChangeCode={this.onChangeCode}
          alertTxt={this.state.alertTxt}
          confirmCoupon={this.confirmCoupon}
        />
        <View style={styles.subtotalContainer}>
          <RowField
            caption={"Subtotal"}
            amount={this.state.subtotal}
            style={{ marginLeft: 10 }}
          />
          <RowField
            caption={"Deliver fee"}
            amount={this.state.deliveryFee}
            style={{ marginLeft: 10, marginTop: 10 }}
          />
        </View>
        <View style={styles.subtotalContainer}>
          <RowField caption={"Total"} amount={this.state.total} />
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
