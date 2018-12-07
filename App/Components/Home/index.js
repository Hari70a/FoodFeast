/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  TouchableHighlight,
  Dimensions
} from "react-native";
import { foodItems, colors } from "../../Config";
import Recipe from "../Recipe";
import Loading from "../Loading";
import MenuModal from "../Menumodal";
import Header from "../Header";
import APIHandlers from "../../Services/APIHandlers";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: [],
      isLoading: true,
      modalVisible: false
    };
  }
  componentDidMount() {
    APIHandlers.getFoodItems().then(responseData => {
      this.setState({ foodItems: responseData, isLoading: false });
    });
  }

  _keyExtractor = (item, index) => `${item.id}`;

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  filterByPrice = () => {
    const clonedRes = this.state.foodItems.slice();
    clonedRes.sort((first, second) => first.item_price - second.item_price);
    this.setState({ foodItems: clonedRes, isLoading: false });
  };

  filterByRating = () => {
    const clonedRes = [...this.state.foodItems];
    clonedRes.sort((a, b) => b.average_rating - a.average_rating);
    this.setState({
      isLoading: false,
      foodItems: clonedRes
    });
  };

  filterBy = id => {
    this.toggleModal();
    this.setState({ isLoading: true });
    if (id === 1) {
      this.filterByPrice();
    } else {
      this.filterByRating();
    }
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <View style={styles.container}>
        <Header title={"FoodFeast"} toggleModal={this.toggleModal} />
        <MenuModal
          modalVisible={this.state.modalVisible}
          toggleModal={this.toggleModal}
          closeModal={() => this.setState({ modalVisible: false })}
          filterBy={this.filterBy}
        />
        <FlatList
          data={this.state.foodItems}
          renderItem={({ item }) => (
            <Recipe {...item} navigation={this.props.navigation} />
          )}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  }
});
