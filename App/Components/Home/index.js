/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import { foodItems, colors } from "../../Config";
import Recipe from "../Recipe";
import Loading from "../Loading";
import Header from "../Header";
import APIHandlers from "../../Services/APIHandlers";
import MenuModal from "../Menumodal";

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
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  filterBy = id => {
    console.log("filterBY");
    // if(id=== 1) this.filterByPrice()
    // else this.filterByRating();
  };

  render() {
    console.log(this.props, this.state, "Home Props");
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.2 }}>
          <Header title={"FoodFeast"} toggleModal={this.toggleModal} />
        </View>
        <View style={{ flex: 0.8 }}>
          <MenuModal
            toggleModal={this.toggleModal}
            filterBy={this.filterBy}
            modalVisible={this.state.modalVisible}
            closeModal={() => this.setState({ modalVisible: false })}
          />
          <FlatList
            data={this.state.foodItems}
            renderItem={({ item }) => (
              <Recipe {...item} navigation={this.props.navigation} />
            )}
            keyExtractor={this._keyExtractor}
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
  }
});
