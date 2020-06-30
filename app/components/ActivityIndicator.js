import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        source={require("../assets/animations/loader.json")}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 1,
    backgroundColor: colors.white,
  },
});

export default ActivityIndicator;
