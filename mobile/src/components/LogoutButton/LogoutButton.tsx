import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const LogoutButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Feather name="log-out" size={24} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
});

export default LogoutButton;
