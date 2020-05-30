import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  Button,
} from "react-native";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      </View>
      <Text style={styles.text}>Sell what you don't need</Text>

      <View style={styles.loginButton}>
        <Button title="LOGIN" color="white" />
      </View>
      <View style={styles.registerButton}>
        <Button title="REGISTER" color="white" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    bottom: 600,
    fontWeight: "bold",
    fontSize: 20,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 50,
    margin: 10,
    borderRadius: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 50,
    marginBottom: 10,
    borderRadius: 20,
  },
});

export default WelcomeScreen;
