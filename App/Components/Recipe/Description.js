import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../Config";
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.itemDescription}>
        <View style={styles.priceContainer}>
          <FontAwesome name="rupee" size={15}style={{marginLeft:3}}/>
          <Text style={styles.ratingTxt}> {this.props.itemPrice}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingTxt}>
            Rating: {this.props.avgRating}
          </Text>
          <Entypo name='star' color={colors.btnBg} size={15} style={styles.starIconStyle}/>
        </View>
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  },
  itemDescription: {
    flex: 0.2,
    margin: 10,
    flexDirection: "row"
  },
  ratingTxt: {
    color: colors.txtColor,
    fontFamily: "Poppins-Regular",
  },
  ratingContainer: { 
    flex: 0.3,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  priceContainer: {
    flex: 0.7,
    alignItems: 'center',
    flexDirection: 'row'
  },
  starIconStyle:{marginLeft:3,marginTop:2}
});
