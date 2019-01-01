import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors } from "../../Config";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

export default class Orders extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Your Orders</Text>
        {this.props.items.map((cur, index) => {
          console.log(cur, index, "Cur index");
          return (
            <TouchableOpacity
              style={styles.listContainer}
              key={index}
              onPress={() => this.props.gotoDetail(cur)}
            >
              <View style={styles.count}>
                <Text style={styles.countTxt}>{cur.quantity}</Text>
                <Feather name="x" size={15} style={{ marginLeft: 3 }} />
              </View>
              <View style={styles.items}>
                <Text style={styles.countTxt}>{cur.itemName}</Text>
              </View>
              <View style={styles.total}>
                <FontAwesome
                  name="rupee"
                  size={15}
                  style={{ marginRight: 3 }}
                />
                <Text style={styles.countTxt}>{cur.quantity * cur.price}</Text>
              </View>
            </TouchableOpacity>
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
    fontFamily: "Poppins-SemiBold",
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
    color: colors.txtColor,
    fontFamily: "Poppins-Regular"
  },

  count: {
    flex: 0.2,
    flexDirection: "row",
    ...center
  },
  items: {
    flex: 0.6
  },
  total: {
    flex: 0.2,
    flexDirection: "row",
    ...center
  }
});
