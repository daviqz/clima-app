import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import page from "../../../assets/splash.png";
interface SplashScreenProps {
  infoText: string;
}

const SplashScreen: React.FC<SplashScreenProps> = (props) => (
  <View style={styles.container}>
    <Image style={styles.background} source={page} />
    <Text style={styles.title}>{props.infoText}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  title: {
    position: "absolute",
    fontSize: 23,
    color: "white",
    fontFamily: "Poppins_400Regular",
    textAlign: 'center',
    paddingHorizontal: 40
  },
});

export default SplashScreen;
