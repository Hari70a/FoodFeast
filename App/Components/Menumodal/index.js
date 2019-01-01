import React, { Component } from "react";
import { StyleSheet, View, Modal, Dimensions } from "react-native";
import { colors } from "../../Config";
import MenuContent from "./MenuContent";

export default class Menumodal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            this.props.closeModal();
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.modalOuterContainer}>
              <View style={styles.modalContainer}>
                {this.props.children}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const center = { alignItems: "center", justifyContent: "center" };
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor
  },
  modalContainer: {
    height: 300,
    width: Dimensions.get("window").width - 40,
    backgroundColor: colors.bgColor,
    borderRadius: 10,
    ...center
  },
  modalOuterContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center"
  }
});
