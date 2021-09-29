import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../interfaces/rootStackParamList";

const HistoryComments: React.FC<
  NativeStackScreenProps<RootStackParamList, "HistoryComments">
> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HistoryComments Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HistoryComments;
