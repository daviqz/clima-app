import React, { memo } from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, View } from "react-native";

import CustomDrawerStyles from "./CustomDawerStyles";
import { connect } from "react-redux";
import moment from "moment";

const CustomDrawer: React.FC<
  DrawerContentComponentProps & { loggedUser?: any }
> = ({ loggedUser, ...props }) => {
  const generateGreetings = () => {
    var currentHour = Number(moment().format("HH"));

    let greeting = "";
    if (currentHour >= 0 && currentHour < 12) {
      greeting = "Bom dia";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Boa tarde";
    } else {
      greeting = "Boa noite";
    }
    return `${greeting}${loggedUser ? `, ${loggedUser.name}` : ""}!`;
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={CustomDrawerStyles.container}>
        <Text style={CustomDrawerStyles.text}>{generateGreetings()}</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const mapStateToProps = ({ loggedUser }: any) => ({
  loggedUser,
});

export default connect(mapStateToProps, null)(memo(CustomDrawer));
