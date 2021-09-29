import React, { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import SwipeUpDown from "react-native-swipe-up-down";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { RootStackParamList } from "../../interfaces/rootStackParamList";

import HomeStyles from "./HomeStyles";
import DayComments from "../DayComments/DayComments";

type ForecastDays = {
  icon: any;
  rangeTemp: string;
  day: string;
};

const forecastItems: ForecastDays[] = [
  {
    icon: "rainy-outline",
    rangeTemp: "12ºc / 22ºc",
    day: "Hoje",
  },
  {
    icon: "sunny-outline",
    rangeTemp: "17ºc / 28ºc",
    day: "Quinta",
  },
  {
    icon: "partly-sunny-outline",
    rangeTemp: "15ºc / 20ºc",
    day: "Sexta",
  },
];

const Home: React.FC<NativeStackScreenProps<RootStackParamList, "Home">> =
  () => {
    const [currentForescast, setCurrentForeCast] = useState(0);

    return (
      <View style={HomeStyles.container}>
        <Text style={HomeStyles.textCity}>Juiz de Fora</Text>
        <Text style={HomeStyles.textFullDate}>Quarta, 13 Outubro, 2021</Text>
        <Text style={HomeStyles.currentTemperature}>18ºc</Text>
        <Text style={HomeStyles.divider}>--------------</Text>
        <Text style={HomeStyles.currentState}>Nublado</Text>
        <Text style={HomeStyles.rangeTemperature}>12ºc / 22ºc</Text>
        <View style={HomeStyles.containerForecast}>
          {forecastItems.map((it, index) => {
            const color = currentForescast === index ? "#fff200" : "#ffffff";
            return (
              <TouchableOpacity
                key={index}
                style={HomeStyles.boxForecastItem}
                onPress={() => setCurrentForeCast(index)}
              >
                <Ionicons name={it.icon} size={40} color={color} />
                <Text style={{ ...HomeStyles.rangeTemperatureForecast, color }}>
                  {it.rangeTemp}
                </Text>
                <Text style={{ ...HomeStyles.dayForecast, color }}>
                  {it.day}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <SwipeUpDown
          itemMini={<AntDesign name="up" size={25} color="black" />}
          itemFull={<DayComments />}
          onShowFull={() => console.log("full")}
          disablePressToShow={true}
          style={HomeStyles.buttonUp}
        />
      </View>
    );
  };

export default Home;
