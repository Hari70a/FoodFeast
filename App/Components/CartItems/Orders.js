import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import { foodItems, colors } from "../../Config";

type Props = {};
export default class Orders extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={styles.title}>Your Orders</Text>
        {this.props.items.map((cur, index) => {
          return (
            <View style={styles.listContainer} key={index}>
              <View style={styles.count}>
                <Text style={styles.countTxt}>{cur.quantity}X</Text>
              </View>
              <View style={styles.items}>
                <Text style={styles.itemTxt}>{cur.itemName}</Text>
              </View>
              <View style={styles.total}>
                <Text style={styles.priceTxt}>
                  ₹ {cur.quantity * cur.price}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };

const styles = StyleSheet.create({
  title: {
    marginTop: 15,
    marginBottom: 5,
    color: colors.txtColor,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15
  },
  listContainer: {
    paddingVertical: 15,
    flexDirection: "row",
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: colors.txtColor
  },
  countTxt: {
    color: colors.txtColor
  },
  itemTxt: {
    color: colors.txtColor
  },
  priceTxt: {
    color: colors.txtColor
  },
  count: {
    flex: 0.2,
    ...center
  },
  items: {
    flex: 0.6
  },
  total: {
    flex: 0.2,
    ...center
  }
});
