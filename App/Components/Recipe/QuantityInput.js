import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../../Config";

export default class QuantityInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.props.count}
          onChangeText={quantityCount =>
            this.props.onChangeCount({ quantityCount })
          }
          style={styles.input}
          autoCapitalize={"none"}
          keyboardType={"numeric"}
          underlineColorAndroid={"transparent"}
          placeholder={"Quantity"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.txtColor,
    marginHorizontal: 20
  },
  input: {
    paddingLeft: 5,
    color: colors.txtColor
  }
});
