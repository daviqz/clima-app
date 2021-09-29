import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SplashScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Buscando sua localização...</Text>
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
