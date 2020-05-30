import React from "react";
import { View, StyleSheet, Image, ImageBackground, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.backgrond}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell what you don't need</Text>
      </View>

      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgrond: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "tomato",
    width: "100%",
    height: 70,
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
    backgroundColor: "teal",
    width: "100%",
    height: 70,
  },
});

export default WelcomeScreen;
/* <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageBackground
          style={{
            flex: 8,
            width: "100%",
          }}
          source={require("../assets/background.jpg")}
        >
          <Image
            style={{
              height: 70,
              width: 70,
              top: 100,
              alignSelf: "center",
            }}
            source={require("../assets/logo-red.png")}
          />
          
        </ImageBackground>
        
        <View
          style={{
            backgroundColor: "gold",
            width: "100%",
            height: 100,
            flex: 1,
          }}
        />
      </View> */
