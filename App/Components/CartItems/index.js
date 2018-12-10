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

  async componentDidMount() {
    const savedFoodItems = Array.from(CartDataProvider.findAll());
    const subtotal = await this.calcSubtotal(savedFoodItems);
    const total = this.calcTotal(subtotal, this.state.deliveryFee);
    this.setState({ savedFoodItems, subtotal, total });
  }

  calcDiscount = discPercent => (discPercent / 100) * this.state.total;

  updateSubTotal = () => {
    let alertTxt;
    if (this.state.couponCode === "FREEDEL" && this.state.subtotal > 100) {
      const total = this.calcTotal(this.state.subtotal, 0);
      alertTxt = "Coupon code applied";
      this.setState({ total, alertTxt, deliveryFee: 0 });
    } else if (this.state.couponCode === "F22LABS" && this.state.total > 400) {
      const discount = this.calcDiscount(20);
      const total = this.state.total - discount;
      alertTxt = "Coupon code applied";
      this.setState({ total, alertTxt });
    } else {
      alertTxt = "Please enter valid coupon code";
      this.setState({ alertTxt });
    }
  };

  onChangeCode = code => {
    this.setState(code);
  };

  calcSubtotal = savedItems =>
    savedItems.reduce((acc, cur) => acc + cur.price, 0);

  calcTotal = (subtotal, deliveryFee) => deliveryFee + subtotal;

  render() {
    return (
      <ScrollView style={styles.container}>
        <HeaderWithBack
          title={"Your Cart"}
          count={data.length}
          moveToPrevious={() => this.props.navigation.goBack()}
        />
        <Orders items={this.state.savedFoodItems} />
        <CouponField
          code={this.state.couponCode}
          onChangeCode={this.onChangeCode}
          alertTxt={this.state.alertTxt}
          confirmCoupon={this.updateSubTotal}
        />
        <View style={styles.subtotalContainer}>
          <RowField
            caption={"Subtotal"}
            amount={this.state.subtotal}
            style={{ marginLeft: 10 }}
          />
          {this.state.deliveryFee ? (
            <RowField
              caption={"Deliver fee"}
              amount={this.state.deliveryFee}
              style={{ marginLeft: 10, marginTop: 10 }}
            />
          ) : null}
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
