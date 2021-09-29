import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface SplashScreenProps {
  infoText: string;
}

const SplashScreen: React.FC<SplashScreenProps> = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.infoText}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
  },
});

export default SplashScreen;
