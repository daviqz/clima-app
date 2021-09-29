import React from "react";
import { Text, View } from "react-native";

import DayCommentsStyles from "./DayCommentsStyles";

const DayComments: React.FC = () => {
  return (
    <View style={DayCommentsStyles.container}>
      <Text>Welcome to component {"\n"} Swipe Up Down on React Native</Text>
    </View>
  );
};

export default DayComments;
