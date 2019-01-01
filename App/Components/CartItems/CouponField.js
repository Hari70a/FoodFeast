import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import { colors } from "../../Config";

export default class CouponField extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.codeContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.code}
              onChangeText={couponCode =>
                this.props.onChangeCode({ couponCode })
              }
              style={styles.input}
              autoCapitalize={"characters"}
              underlineColorAndroid={"transparent"}
              placeholder={"Coupon code"}
            />
          </View>
          <TouchableOpacity
            style={styles.applyBtn}
            onPress={() => this.props.confirmCoupon()}
          >
            <Text style={styles.applyTxt}>APPLY</Text>
          </TouchableOpacity>
        </View>
        {this.props.alertTxt ? (
          <Text style={styles.alertTxt}>{this.props.alertTxt}</Text>
        ) : null}
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    marginHorizontal: 15,
    marginTop: 15
  },
  codeContainer: {
    borderColor: colors.txtColor,
    borderBottomWidth: 1,
    flexDirection: "row"
  },
  inputContainer: {
    flex: 0.8
  },
  input: {
    paddingLeft: 5,
    color: colors.txtColor,
    fontFamily:'Poppins-Regular'
  },
  applyBtn: {
    flex: 0.2,
    ...center
  },
  applyTxt: {
    color: colors.btnBg,
    fontFamily:'Poppins-SemiBold'
  },
  alertTxt: {
    color: colors.headerColor,
    fontFamily:'Poppins-Regular'
  }
});
