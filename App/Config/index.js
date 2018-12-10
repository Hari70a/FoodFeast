import { Alert } from "react-native";
export const colors = {
  bgColor: "#fff",
  txtColor: "#000",
  headerColor: "#FFA500",
  shadeColor: "rgba(0,0,0,0.4)",
  btnBg: "#2FA60C",
  notifyColor: "#f7006b"
};

export const showAlert = message => {
  Alert.alert("", message);
};
