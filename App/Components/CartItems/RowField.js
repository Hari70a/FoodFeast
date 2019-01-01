import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../Config";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class RowField extends Component {
  render() {
    const style = this.props.style ? this.props.style : null;
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={[styles.subtotal, style]}>
          <Text style={styles.subtotalTxt}>{this.props.caption}</Text>
        </View>
        <View style={styles.count}>
          <FontAwesome name="rupee" size={15}style={{marginRight:3}}/>
          <Text style={styles.countTxt}>{this.props.amount}</Text>
        </View>
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };

const styles = StyleSheet.create({
  subtotalContainer: {
    marginHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.txtColor
  },
  subtotal: {
    flex: 0.8,
    justifyContent: "center"
  },
  count: { 
    flex: 0.2,
    flexDirection: 'row',
    ...center
  },
  subtotalTxt: {
    color: colors.txtColor,
    fontFamily: 'Poppins-Regular'
  },
  countTxt: {
    color: colors.txtColor,
    fontFamily: 'Poppins-Regular'
  }
});
