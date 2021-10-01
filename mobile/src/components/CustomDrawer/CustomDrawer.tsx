import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, View } from "react-native";

import CustomDrawerStyles from "./CustomDawerStyles";

const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={CustomDrawerStyles.container}>
        <Text style={CustomDrawerStyles.text}>Boa noite, usuário!</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
