import React from "react";
import { Button, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function AppButton(props) {
  return (
    <View style={styles.container}>
      <Button style={styles.button} title="LOGIN" color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {},
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    borderRadius: 30,
    fontWeight: "bold",
  },
});

export default AppButton;
