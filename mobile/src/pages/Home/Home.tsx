import moment from "moment";
import "moment/locale/pt-br";
import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import SwipeUpDown from "react-native-swipe-up-down";
import { AntDesign } from "@expo/vector-icons";

import { getData } from "../../services/asyncStorage";
import { RootStackParamList } from "../../interfaces/rootStackParamList";
import DayComments from "../DayComments/DayComments";
import HomeStyles from "./HomeStyles";

import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
import bg5 from "../../assets/bg5.jpg";

moment.locale("pt-br");

const Home: React.FC<NativeStackScreenProps<RootStackParamList, "Home">> = ({
  navigation,
}) => {
  const [currentForescast, setCurrentForeCast] = useState(0);
  const [forecastData, setForecastData] = useState<any>();
  const [forecastCurrentData, setForecastCurrentData] = useState<any>();
  const arrayImages = [bg5];

  const getForecastData = async () => {
    const items = await getData();
    setForecastData(items);
  };

  useEffect(() => {
    if (forecastData) {
      setForecastCurrentData(
        forecastData.forecast.forecastday[currentForescast]
      );
    }
  }, [forecastData, currentForescast]);

  useEffect(() => {
    getForecastData();
  }, []);

  const minMaxTemperature = (data: any) => {
    return data
      ? `${parseInt(data.day.mintemp_c)}ºc / ${parseInt(data.day.maxtemp_c)}ºc`
      : "";
  };

  const formatDay = () => {
    const day = moment(forecastCurrentData.date);
    const dayOfWeek = day.format("dddd").split("-")[0];
    return `${dayOfWeek}, ${day.format("DD MMMM")}, ${day.format("YYYY")}`;
  };

  return (
    <ImageBackground
      source={arrayImages[Math.floor(Math.random() * arrayImages.length)]}
      resizeMode="cover"
      style={HomeStyles.container}
    >
      <Text style={HomeStyles.textCity}>
        {forecastData ? forecastData.location.name : ""}
      </Text>
      <Text style={HomeStyles.textFullDate}>
        {forecastCurrentData ? formatDay() : ""}
      </Text>
      <Text style={HomeStyles.currentTemperature}>
        {currentForescast === 0 && forecastData
          ? `${parseInt(forecastData.current.temp_c)}ºc`
          : ""}
      </Text>
      <Text style={HomeStyles.divider}>--------------</Text>
      <Text style={HomeStyles.currentState}>
        {forecastCurrentData ? forecastCurrentData.day.condition.text : ""}
      </Text>
      <Text style={HomeStyles.rangeTemperature}>
        {minMaxTemperature(forecastCurrentData)}
      </Text>
      <View style={HomeStyles.containerForecast}>
        {forecastData &&
          forecastData.forecast.forecastday.map((it: any, index: number) => {
            const color = currentForescast === index ? "#fff200" : "white";
            return (
              <TouchableOpacity
                key={index}
                style={HomeStyles.boxForecastItem}
                onPress={() => setCurrentForeCast(index)}
              >
                <Image
                  style={HomeStyles.iconForecast}
                  source={{
                    uri: `https:${it.day.condition.icon}`,
                  }}
                />
                <Text style={{ ...HomeStyles.rangeTemperatureForecast, color }}>
                  {minMaxTemperature(it)}
                </Text>
                <Text style={{ ...HomeStyles.dayForecast, color }}>
                  {index === 0
                    ? "Hoje"
                    : moment(it.date).format("dddd").split("-")[0]}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
      {currentForescast === 0 && (
        <SwipeUpDown
          itemMini={<AntDesign name="up" size={25} color="white" />}
          itemFull={<DayComments navigation={navigation} />}
          disablePressToShow={false}
          style={HomeStyles.buttonUp}
          swipeHeight={60}
        />
      )}
    </ImageBackground>
  );
};

export default Home;
