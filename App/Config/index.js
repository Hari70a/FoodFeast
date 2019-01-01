import { Alert } from "react-native";

export const colors = {
  bgColor: "#fff",
  txtColor: "#000",
  headerColor: "#ff0800",
  shadeColor: "rgba(0,0,0,0.4)",
  btnBg: "#2FA60C",
  notifyColor: "#ff0800"
};

export const showAlert = message => {
  Alert.alert("", message);
};

export const images = {
  addCart: require("../Assets/Images/shopping-cart.png"),
  price: require("../Assets/Images/price-480.png"),
  rating: require("../Assets/Images/rating-orange-480.png"),
  filter: require("../Assets/Images/filter-480.png"),
};
