import { StyleSheet } from "react-native";

import { darkColor, lightColor } from "../../colors";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: darkColor,
  },
  textCity: {
    fontSize: 33,
    fontFamily: "Poppins_400Regular",
    color: "white",
    marginBottom: 5,
  },
  textFullDate: {
    fontSize: 20,
    fontFamily: "Poppins_300Light",
    color: "white",
    marginBottom: 20,
  },
  currentTemperature: {
    fontSize: 100,
    fontFamily: "Poppins_700Bold",
    color: "white",
  },
  divider: {
    color: "white",
    fontSize: 28,
    marginBottom: 25,
  },
  currentState: {
    color: "white",
    fontFamily: "Poppins_500Medium",
    fontSize: 25,
    marginBottom: 7,
  },
  rangeTemperature: {
    color: "white",
    fontFamily: "Poppins_500Medium",
    fontSize: 25,
    marginBottom: 80,
  },
  containerForecast: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  boxForecastItem: {
    alignItems: "center",
  },
  rangeTemperatureForecast: {
    fontFamily: "Poppins_500Medium",
    marginVertical: 5,
    fontSize: 16
  },
  dayForecast: {
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
  buttonUp: {
    backgroundColor: lightColor,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeStyles;
