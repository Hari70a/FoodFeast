import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image
} from "react-native";
import { colors, images } from "../../Config";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import observableListStore from "../../Mobx/ListStore";
import { observer } from "mobx-react";

@observer
export default class Header extends Component {
  render() {
    return (
      <View style={styles.homeHeaderContainer}>
        <View style={styles.homeHeaderView}>
          <Text style={styles.homeHeaderText}>{this.props.title}</Text>
        </View>

        <View style={{ flex: 0.4, flexDirection: "row", marginLeft: 20 }}>
          <TouchableOpacity
            style={styles.filterbyStyle}
            onPress={() => this.props.toggleModal()}
          >
            <Image source={images.filter} style={styles.imageSize}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterbyStyle}
            onPress={() => this.props.gotoCart()}
          >
            <Text style={styles.count}>
              {observableListStore.cartItemsCount}
            </Text>
            <Image source={images.addCart} style={styles.imageSize} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  homeHeaderContainer: {
    backgroundColor: colors.bgColor,
    alignItems: "center",
    height: 70,
    flexDirection: "row",
    paddingTop: Platform.OS == "ios" ? 12 : 0,
    elevation: 5
  },
  homeHeaderText: {
    color: colors.headerColor,
    textAlign: "right",
    fontFamily: "Poppins-SemiBold",
    fontSize: 20
  },
  homeHeaderView: {
    flex: 0.7
  },
  homeIconView: {
    flex: 0.1,
    padding: 10,
    ...center
  },
  filterbyStyle: {
    flex: 0.5,
    marginRight: 5,
    padding: 10,
    ...center
  },
  imageSize:{width:40, height:40},
  count: {
    color: colors.notifyColor,
    marginLeft:5,
    marginTop:5,
    fontFamily: "Poppins-SemiBold",
  }
});
