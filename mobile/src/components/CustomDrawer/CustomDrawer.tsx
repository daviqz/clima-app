import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, View, StyleSheet } from "react-native";

const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Text style={styles.text}>Boa noite, usuário!</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    marginLeft: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold'
  },
});

export default CustomDrawer;
