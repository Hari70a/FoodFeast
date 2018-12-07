import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import ImageWrapper from "./ImageWrapper";
import { colors } from "../../Config/";
import Description from "./Description";
import HeaderWithBack from "../Header/HeaderWithBack";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderWithBack
          title={"Your Cart"}
          moveToPrevious={() => this.props.navigation.goBack()}
        />
        <View style={{ flex: 0.5 }}>
          <ImageWrapper
            style={{
              height: 300,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0
            }}
            sourceUrl={this.props.navigation.state.params.image_url}
            itemName={this.props.navigation.state.params.item_name}
          />
        </View>
        <View style={{ flex: 0.5 }}>
          <Description
            itemPrice={this.props.navigation.state.params.item_price}
            avgRating={this.props.navigation.state.params.average_rating}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
