import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        color="white"
        size={50}
        style={styles.closedIcon}
        name="close"
      />
      <MaterialCommunityIcons
        color="white"
        size={50}
        name="trash-can-outline"
        style={styles.deleteIcon}
      />
      <Image
        resizeMode="contain"
        style={styles.chairImage}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closedIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  chairImage: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
